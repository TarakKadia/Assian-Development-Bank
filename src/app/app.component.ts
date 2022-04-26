import { HttpClient } from '@angular/common/http';
import { Component, HostListener, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralApiService } from './core/general-api.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    @ViewChild('mailButtonPara') mailButtonPara;
    @ViewChild('mailButtonBox') mailButtonBox;

    title = 'angular-pwa';
    mailStringPara = '';
    mailStringBox = '';

    data: any;

    constructor(private aRouter: ActivatedRoute, private router: Router, private generalApiService: GeneralApiService) {
    }

    ngOnInit() {
        this.selectedText();
    }

    getSelectionText() {
        let text = "";
        let selectionFunc = window.getSelection();
        const doc = document as any;
        if (selectionFunc) {
            text = selectionFunc.toString();
        } else if (doc.selection && doc.selection.type != "Control") {
            text = doc.selection.createRange().text;
        }
        return text;
    }

    setSelectedText() {
        const currentURLSeg = this.router.url.split('?')[0].split('/');
        const currentURL = currentURLSeg[currentURLSeg.length - 1];
        const id = this.aRouter.snapshot.queryParams['id'];
        let tempObj = {
            url: currentURL,
            id: id,
            data: [this.getSelectionText()]
        };
        let highlitedTextArray: Array<any> = JSON.parse(window.localStorage.getItem('highlitedText') || '[]');
        let selectedDataItem = highlitedTextArray.filter((el: any) => el.id === id && el.url === currentURL);
        if (selectedDataItem.length) {
            selectedDataItem[0].data.push(this.getSelectionText());
            window.localStorage.setItem('highlitedText', JSON.stringify(highlitedTextArray));
        } else {
            highlitedTextArray.push(tempObj);
            window.localStorage.setItem('highlitedText', JSON.stringify(highlitedTextArray));
        }
    }

    selectedText(): void {
        let cookieData: any = localStorage.getItem('highLightedText');
        if (cookieData) {
            cookieData = JSON.parse(cookieData);
            if (cookieData) {
                if (cookieData.length > 0) {
                    let isChapExist = false;
                    cookieData.forEach((element: any) => {
                        if (element.url == this.generalApiService.url) {
                            isChapExist = true;
                            if (element.highLightedData.length > 0) {
                                let isNew = true;
                                element.highLightedData.forEach((ele: any, index1: any) => {
                                    if (ele.paraId == this.generalApiService.selectedId) {
                                        if (ele.text === this.generalApiService.selectedText) {
                                            isNew = false
                                            element.highLightedData.splice(index1, 1);
                                        }
                                    }
                                });
                                if (isNew) {
                                    element.highLightedData.push({
                                        paraId: this.generalApiService.selectedId ? this.generalApiService.selectedId : '',
                                        text: this.generalApiService.selectedText
                                    })
                                }
                            } else {
                                element.highLightedData.push({
                                    paraId: this.generalApiService.selectedId ? this.generalApiService.selectedId : '',
                                    text: this.generalApiService.selectedText
                                })
                            }
                        }
                    });
                    if (!isChapExist) {
                        let chapData = {
                            url: this.generalApiService.url,
                            highLightedData: []
                        }

                        chapData.highLightedData.push({
                            paraId: this.generalApiService.selectedId ? this.generalApiService.selectedId : '',
                            text: this.generalApiService.selectedText
                        })

                        cookieData.push(chapData);
                    }
                } else {
                    let chapData = {
                        url: this.generalApiService.url,
                        highLightedData: []
                    }
                    chapData.highLightedData.push({
                        paraId: this.generalApiService.selectedId ? this.generalApiService.selectedId : '',
                        text: this.generalApiService.selectedText
                    })

                    cookieData.push(chapData);
                }
            }

        } else {
            cookieData = [];
            let chapData = {
                url: this.generalApiService.url,
                highLightedData: []
            }
            chapData.highLightedData.push({
                paraId: this.generalApiService.selectedId ? this.generalApiService.selectedId : '',
                text: this.generalApiService.selectedText
            })

            cookieData.push(chapData);
        }

        localStorage.setItem('highLightedText', JSON.stringify(cookieData));
        this.generalApiService.updateHighlight.next(true);
    }


    getBookmarkText() {
        let bookmarkText = "";
        let bookmarkFunction = window.getSelection();
        const doc = document as any;

        if (bookmarkFunction) {
            bookmarkText = bookmarkFunction.toString();
        } else if (doc.selection && doc.selection.type != "Control") {
            bookmarkText = doc.selection.createRange().bookmarkText;
        }
        return bookmarkText;
    }

    setBookmarkText() {
        const currentURLSeg = this.router.url.split('?')[0].split('/');
        const currentURL = currentURLSeg[currentURLSeg.length - 1];
        const id = this.aRouter.snapshot.queryParams['id'];
        let tempObj = {
            url: currentURL,
            id: id,
            data: [this.getBookmarkText()]
        };


        let highlightBookmarkText: Array<any> = JSON.parse(window.localStorage.getItem('highlitedBookmark') || '[]');
        let selectedDataItem = highlightBookmarkText.filter((el: any) => el.id === id && el.url === currentURL);
        if (selectedDataItem.length) {
            selectedDataItem[0].data.push(this.getBookmarkText());
            window.localStorage.setItem('highlitedBookmarkText', JSON.stringify(highlightBookmarkText));
        } else {
            highlightBookmarkText.push(tempObj);
            window.localStorage.setItem('highlitedBookmark', JSON.stringify(highlightBookmarkText));
        }
    }

    selectedBookmarkText(): void {
        // this.generalApiService.bookmarkPara.next(true);
        this.bookMarkTextPara();
    }

    saveBoxHighlight(fromBookmark: boolean): void {
        let boxHighlightData = {
            highLightedData: {
                paraId: this.generalApiService.selectedBox.id,
                title: this.generalApiService.selectedBox.text
            },
            url: this.generalApiService.url
        }

        let getBoxHighlightData: any = localStorage.getItem('highLightedBox');
        if (getBoxHighlightData) {
            getBoxHighlightData = JSON.parse(getBoxHighlightData);
            if (getBoxHighlightData.length > 0) {
                let isAdded = false;
                let index = 0;
                getBoxHighlightData.forEach((element: any, index: any) => {
                    if (element.highLightedData.title === this.generalApiService.selectedBox.text) {
                        isAdded = true;
                        index = index;
                    }
                });

                if (isAdded) {
                    if (!fromBookmark) {
                        getBoxHighlightData.splice(index, 1);
                    }
                } else {
                    getBoxHighlightData.push(boxHighlightData);
                }

            } else {
                getBoxHighlightData.push(boxHighlightData);
            }
            localStorage.setItem('highLightedBox', JSON.stringify(getBoxHighlightData));
        } else {
            localStorage.setItem('highLightedBox', JSON.stringify([boxHighlightData]));
        }

        this.generalApiService.updateHighlight.next(true);
    }

    bookMarkText() {
        this.saveBoxHighlight(true);
        if (this.generalApiService.selectedBox.id && this.generalApiService.selectedBox.id !== '') {
            const tempBookmark = {
                url: this.generalApiService.url.split('?')[0],
                paraID: this.generalApiService.selectedBox.id,
                text: this.generalApiService.selectedBox.text.substring(0, 10),
                chapterTitle: this.generalApiService.chapterDetails.title,
                chapterId: this.generalApiService.chapterDetails.id,
                type: 'box'
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
            bookmarkStorageArr.forEach((element: any, index: any) => {
                if (element.paraID === this.generalApiService.selectedBox.id) {
                    // alert('This paragraph is already bookmarked');
                    bookmarkStorageArr.splice(index, 1);
                    this.saveBoxHighlight(false);
                } else {
                    isAdded = false;
                }
            });

            if (!isAdded) {
                bookmarkStorageArr.push(tempBookmark);
            }
        } else {
            bookmarkStorageArr.push(tempBookmark);
            this.generalApiService.selectedBox.id = '';
        }
        localStorage.setItem('highlitedBookmark', JSON.stringify(bookmarkStorageArr));
        this.generalApiService.isBookmarkAdded.next(true);
    }

    sendEmail() {
        let url = window.location.origin + this.generalApiService.url;
        url += this.generalApiService.url.split('?').length > 0 ? `&fm=true&t=para&pid=${this.generalApiService.selectedId}&d=${encodeURIComponent(this.generalApiService.selectedText)}` : `?fm=true&t=para&pid=${this.generalApiService.selectedId}&d=${encodeURIComponent(this.generalApiService.selectedText)}`;
        let subject = this.generalApiService.chapterDetails.title;
        let body = this.generalApiService.selectedText;
        body += '\n \n';
        body += `<button><a href=${url}>OPEN</a></button>`
        this.mailStringPara = `?subject=${subject}&body=${encodeURIComponent(body)}`;
        setTimeout(() => {
            this.mailButtonPara.nativeElement.click();
        }, 100);

    }

    sendEmailBox() {
        let url = window.location.origin + this.generalApiService.url;
        url += this.generalApiService.url.split('?').length > 0 ? `&fm=true&t=box&pid=${this.generalApiService.selectedBox.id}&d=${encodeURIComponent(this.generalApiService.selectedBox.text)}` : `?fm=true&t=box&pid=${this.generalApiService.selectedBox.id}&d=${encodeURIComponent(this.generalApiService.selectedBox.text)}`;
        let subject = this.generalApiService.chapterDetails.title;
        let body2 = this.generalApiService.selectedBox.data;
        body2 += '\n \n';
        body2 += `<button><a href=${url}>OPEN</a></button>`
        this.mailStringBox = `?subject=${subject}&body=${encodeURIComponent(body2)}`;
        setTimeout(() => {
            this.mailButtonBox.nativeElement.click();
        }, 100);
    }

    bookMarkTextPara() {
        if (this.generalApiService.selectedId && this.generalApiService.selectedId !== '') {
            const tempBookmark = {
                url: this.generalApiService.url.split('?')[0],
                paraID: this.generalApiService.selectedId,
                text: this.generalApiService.selectedText.substring(0, 200),
                chapterTitle: this.generalApiService.chapterDetails.title,
                chapterId: this.generalApiService.chapterDetails.id,
                type: 'paragraph'
            };
            this.saveBookmarkPara(tempBookmark);
        }
    }

    saveBookmarkPara(tempBookmark: any) {
        let bookmarkStorageArr: any = localStorage.getItem('highlitedBookmark');
        if (bookmarkStorageArr) {
            bookmarkStorageArr = JSON.parse(bookmarkStorageArr)
        } else {
            bookmarkStorageArr = [];
        }

        if (bookmarkStorageArr.length > 0) {
            let isAdded = true;
            bookmarkStorageArr.forEach((element: any, index: any) => {
                let tmpUrl = this.generalApiService.url.split('?').length > 1 ? this.generalApiService.url.split('?')[0] : this.generalApiService.url;
                if (element.url == tmpUrl && element.paraID === this.generalApiService.selectedId) {
                    alert('This paragraph is already bookmarked');
                    return;

                } else {
                    isAdded = false;
                }
            });

            if (!isAdded) {
                bookmarkStorageArr.push(tempBookmark);
            }
        } else {
            bookmarkStorageArr.push(tempBookmark);
            // this.selectedID = '';
        }
        localStorage.setItem('highlitedBookmark', JSON.stringify(bookmarkStorageArr));
        this.generalApiService.isBookmarkAdded.next(true);
    }



}