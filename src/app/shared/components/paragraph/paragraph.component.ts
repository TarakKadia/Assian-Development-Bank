import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { text } from 'd3-fetch';
import shareThis from "share-this";
import * as emailSharer from "share-this/dist/sharers/email";
import * as facebookSharer from "share-this/dist/sharers/facebook";
import * as linkedInSharer from "share-this/dist/sharers/linked-in";
import * as twitterSharer from "share-this/dist/sharers/twitter";

import { GeneralApiService } from './../../../core/general-api.service';

declare var jQuery: any;


@Component({
    selector: 'app-paragraph',
    templateUrl: './paragraph.component.html',
    styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent implements OnInit {

    @Input() data: any;
    @Input() url: any;
    isShowData = false;
    selectedID: string = '';

    constructor(
        private generalApiService: GeneralApiService,
        private route: ActivatedRoute
    ) {
        // const selectionShare = shareThis({
        //     document: document,
        //     selector: "body",
        //     sharers: [emailSharer, facebookSharer, linkedInSharer, twitterSharer]
        // });

        // selectionShare.init();
    }

    ngOnInit(): void {

        this.generateHTML();
        this.generalApiService.updateHighlight.subscribe((isHighlight) => {
            if (isHighlight) {
                this.generateHTML();
            }
        });

        this.generalApiService.bookmarkPara.subscribe((bookmark) => {
            if (bookmark) {
                // this.bookMarkText();
            }
        });
    }

    GetSelection(event: MouseEvent): void {
        const currentSelection = window.getSelection() || '';
        const currentSelectedText = currentSelection.toString();
        if (currentSelectedText != '') {
            this.markSelectedTextAsHighlighted(currentSelectedText);
            this.selectedID = this.data.id;
        }
    }

    markSelectedTextAsHighlighted(selectedText: any) {
        let storageArr: any = localStorage.getItem('highLightedText');
        if (storageArr) {
            storageArr = JSON.parse(storageArr)
        } else {
            storageArr = [];
        }

        let storageSelectedArr: any = localStorage.getItem('selectedText');
        if (storageSelectedArr) {
            storageSelectedArr = JSON.parse(storageSelectedArr)
        } else {
            storageSelectedArr = [];
        }

        storageSelectedArr.push({
            paraId: this.data.id,
            text: selectedText
        });

        localStorage.setItem('selectedText', JSON.stringify(storageSelectedArr));

        if (storageArr.length > 0) {
            let isChapExist = false;
            storageArr.forEach((element: any) => {
                if (element.url == this.url) {
                    isChapExist = true;
                    if (element.highLightedData.length > 0) {
                        let isNew = true;
                        element.highLightedData.forEach((ele: any) => {
                            if (ele.paraId == this.data.id) {
                                isNew = false
                                if (ele.text != selectedText) {
                                    if (this.data.data == selectedText) {
                                        element.highLightedData = [];
                                    }
                                }
                            }
                        });
                        if (isNew) {
                        }
                    }
                }
            });
            if (!isChapExist) {
                let chapData = {
                    url: this.url,
                    highLightedData: []
                }

                storageArr.push(chapData);
            }
        } else {
            let chapData = {
                url: this.url,
                highLightedData: []
            }

            storageArr.push(chapData);
        }
        localStorage.setItem('highLightedText', JSON.stringify(storageArr));

        setTimeout(() => {
            this.generateHTML();
        }, 100);
    }

    generateHTML() {
        let storageArr: any = localStorage.getItem('highLightedText');
        if (storageArr) {
            storageArr = JSON.parse(storageArr)
        } else {
            storageArr = [];
        }

        let storageSelectedArr: any = localStorage.getItem('selectedText');
        if (storageSelectedArr) {
            storageSelectedArr = JSON.parse(storageSelectedArr)
        } else {
            storageSelectedArr = [];
        }

        if (typeof (this.data) == "object") {

            this.data['newData'] = this.data.data;
            storageArr.forEach(element => {
                if (this.url.indexOf(element.url) > -1) {
                    element.highLightedData.forEach((ele, key) => {
                        if (ele.paraId == this.data.id) {
                            if (this.data.data == ele.text) {
                                let markedData = `<mark class="mark ${ele.paraId} ${key}">${ele.text}</mark>`;
                                this.data.newData = markedData;
                            } else if (this.data.data.indexOf(ele.text) > -1) {
                                let markedData = `<mark class="mark ${ele.paraId} ${key}">${ele.text}</mark>`;
                                this.data.newData = this.data.newData.replace(ele.text, markedData);
                            }
                        }
                    });
                }
            });

            storageSelectedArr.forEach((ele: any, key: any) => {
                if (ele.paraId == this.data.id) {
                    if (this.data.data == ele.text) {
                        let markedData = `<span class="mark2 ${ele.paraId} ${key}">${ele.text}</span>`;
                        this.data.newData = markedData;
                    } else if (this.data.data.indexOf(ele.text) > -1) {
                        let markedData = `<span class="mark2 ${ele.paraId} ${key}">${ele.text}</span>`;
                        this.data.newData = this.data.newData.replace(ele.text, markedData);
                    }
                }
            });

            localStorage.removeItem('selectedText');
        }


        setTimeout(() => {
            this.isShowData = true

            setTimeout(() => {
                jQuery(".content").on("mouseover", (event) => {
                    var target = jQuery(event.target);
                    if (target.is('#hover') || target.is('.mark') || target.is('.mark2')) {
                        jQuery('#hover').css('display', 'block');

                        const className = target.attr('class').split(' ');
                        var class_names = '.' + className[0] + '.' + className[1] + '.' + className[2];

                        this.generalApiService.selectedText = jQuery(class_names).text();
                        const id = jQuery(class_names).parent().attr('id');
                        this.generalApiService.selectedId = id;

                        var position = jQuery(class_names).offset();
                        var width = jQuery(class_names).width() / 2;
                        let minusHeight = event.pageY - position.top

                        // jQuery('#hover').css('top', (position.top - 60) + 'px');
                        // jQuery('#hover').css('left', (position.left + width - 60) + 'px');

                        // jQuery('#hover').css('top', minusHeight > 35 ? event.pageY - 80 : position.top - 60 + 'px');
                        jQuery('#hover').css('top', minusHeight > 20 ? position.top - 30 : position.top - 60 + 'px');
                        jQuery('#hover').css('left', (event.pageX - 120) + 'px');
                    } else {
                        jQuery('#hover').css('display', 'none');
                    }
                });

                // jQuery(".content").on("mouseleave", (event) => {
                //     jQuery('#hover').css('display', 'none');
                // });
            }, 200);
        }, 100);
    }

    bookMarkText() {
        if (this.selectedID && this.selectedID !== '') {
            const tempBookmark = {
                url: this.url.split('?')[0],
                paraID: this.selectedID,
                text: this.generalApiService.selectedText.substring(0, 10),
                chapterTitle: this.generalApiService.chapterDetails.title,
                chapterId: this.generalApiService.chapterDetails.id,
                type: 'paragraph'
            };
            this.saveBookmark(tempBookmark);
        }
    }

    saveBookmark(tempBookmark: any) {
        let bookmarkStorageArr: any = localStorage.getItem('highlitedBookmark');
        if (bookmarkStorageArr) {
            bookmarkStorageArr = JSON.parse(bookmarkStorageArr)
        } else {
            bookmarkStorageArr = [];
        }

        if (bookmarkStorageArr.length > 0) {
            let isAdded = true;
            bookmarkStorageArr.forEach((element: any) => {
                if (element.url == this.url && element.paraID === this.selectedID) {
                    alert('This paragraph is already bookmarked');
                } else {
                    isAdded = false;
                }
            });

            if (!isAdded) {
                bookmarkStorageArr.push(tempBookmark);
            }
        } else {
            bookmarkStorageArr.push(tempBookmark);
            this.selectedID = '';
        }
        localStorage.setItem('highlitedBookmark', JSON.stringify(bookmarkStorageArr));
        this.generalApiService.isBookmarkAdded.next(true);
    }

    getWord(word): void {
        return word;
    }

}

