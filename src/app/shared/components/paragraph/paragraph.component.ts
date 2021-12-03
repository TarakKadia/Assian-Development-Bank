import { Component, Input, OnInit } from '@angular/core';
import { text } from 'd3-fetch';
import shareThis from "share-this";
import * as emailSharer from "share-this/dist/sharers/email";
import * as facebookSharer from "share-this/dist/sharers/facebook";
import * as linkedInSharer from "share-this/dist/sharers/linked-in";
import * as twitterSharer from "share-this/dist/sharers/twitter";

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
    constructor() {
        // const selectionShare = shareThis({
        //     document: document,
        //     selector: "body",
        //     sharers: [emailSharer, facebookSharer, linkedInSharer, twitterSharer]
        // });
        
        // selectionShare.init();
    }

    ngOnInit(): void {
        this.generateHTML();
    }
    GetSelection(event: MouseEvent): void {
        const currentSelection = window.getSelection() || '';
        const currentSelectedText = currentSelection.toString();
        if(currentSelectedText != ''){
            this.markSelectedTextAsHighlighted(currentSelectedText);
        }
    }

    markSelectedTextAsHighlighted(selectedText: any) {
        let storageArr: any = localStorage.getItem('highLightedText');
        if (storageArr) {
            storageArr = JSON.parse(storageArr)
        } else {
            storageArr = [];
        }

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
                                if(ele.text != selectedText){
                                    if(this.data.data == selectedText){
                                        element.highLightedData = [];
                                    }
                                    element.highLightedData.push({
                                        paraId: this.data.id,
                                        text: selectedText
                                    })
                                }
                            }
                        });
                        if (isNew) {
                            element.highLightedData.push({
                                paraId: this.data.id,
                                text: selectedText
                            })
                        }
                    }
                }
            });
            if (!isChapExist) {
                let chapData = {
                    url: this.url,
                    highLightedData: []
                }

                chapData.highLightedData.push({
                    paraId: this.data.id,
                    text: selectedText
                })

                storageArr.push(chapData);
            }
        } else {
            let chapData = {
                url: this.url,
                highLightedData: []
            }

            chapData.highLightedData.push({
                paraId: this.data.id,
                text: selectedText
            })

            storageArr.push(chapData);
        }
        localStorage.setItem('highLightedText', JSON.stringify(storageArr));

    }

    generateHTML() {
        let storageArr: any = localStorage.getItem('highLightedText');
        if (storageArr) {
            storageArr = JSON.parse(storageArr)
        } else {
            storageArr = [];
        }
        this.data['newData'] = this.data.data;

        storageArr.forEach(element => {
            if (element.url == this.url) {
                element.highLightedData.forEach(ele => {
                    if (ele.paraId == this.data.id) {
                       if(this.data.data ==  ele.text){
                            let markedData = '<mark class="mark">' + ele.text + '</mark>';
                            this.data.newData = markedData;
                        } else  if (this.data.data.indexOf(ele.text) > -1) {
                            let markedData = '<mark class="mark">' + ele.text + '</mark>';
                            this.data.newData = this.data.newData.replace(ele.text, markedData);
                            console.log(this.data.newData)
                        } 
                    }
                });
            }

        });

        setTimeout(() => {
            this.isShowData = true

            setTimeout(() => {
                jQuery(".mark").on("mouseover", (event) => {

                    var target = jQuery(event.target);
                        jQuery('#hover').css('display', 'block');
                        var relX = event.pageX;
                        var relY = event.pageY;
        
                        console.log('relX', relX, 'relY', relY);
        
        
                        jQuery('#hover').css('top', relY + 'px');
                        jQuery('#hover').css('left', relX + 'px');
        
                });

                jQuery(".mark").on("mouseout", (event) => {
                    jQuery('#hover').css('display', 'none');
                });
            }, 200);
        }, 100);
    }
}

