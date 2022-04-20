import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import buttonJsonData from "src/app/constants/button.json";
import chapter1JsonData from "src/app/constants/chapter1.json";
import chapter2CardJsonData from "../../constants/chapter2-cards.json"
import chapter3CardJsonData from "../../constants/chapter3.json"
import centralWestAsia from "../../constants/central-west-asia.json";
import eastAsia from "../../constants/east-asia.json";
import pacific from "../../constants/pacific.json";
import southasia from "../../constants/south-asia.json";
import southeastasia from "../../constants/south-east-asia.json";
import privatesector from "../../constants/private-sector.json";


import financialHighlight from "../../constants/financial-highlight.json";
import { GeneralApiService } from 'src/app/core/general-api.service';

declare var jQuery: any;

@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit, AfterViewInit {

    chapter1Data: any;
    button: any;
    chapter2Data = [];
    data: any;
    loading: any;
    param: any;
    url: any;
    fromMail = false;
    mailParaId = '';
    mailData = '';

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private generalApiService: GeneralApiService
    ) { }


    ngOnInit(): void {
        window.scroll(0, 0);

        this.url = this.router.url;
        this.generalApiService.url = this.url;
        this.loading = true;
        this.chapter1Data = chapter1JsonData;
        this.button = buttonJsonData;

        this.route.queryParams
            .subscribe(params => {

                if (params['fm']) {
                    this.fromMail = true;
                    if (params['t'] === 'para') {
                        let highlightedData: any = {
                            highLightedData: [{
                                paraId: params['pid'],
                                text: decodeURIComponent(params['d'])
                            }],
                            url: this.router.url
                        }
    
                        let getHighLightedData: any = localStorage.getItem('highLightedText');
                        if (getHighLightedData) {
                            getHighLightedData = JSON.parse(getHighLightedData);
                            if (getHighLightedData.length > 0) {
                                getHighLightedData.push(highlightedData);
                            } else {
                                getHighLightedData.push(highlightedData);
                            }
    
                            localStorage.setItem('highLightedText', JSON.stringify(getHighLightedData));
                        } else {
                            localStorage.setItem('highLightedText', JSON.stringify([highlightedData]));
                        }
                    }

                    if (params['t'] === 'box') {
                        let highlightedData: any = {
                            highLightedData: {
                                paraId: params['pid'],
                                text: decodeURIComponent(params['d'])
                            },
                            url: this.router.url
                        }
    
                        let getHighLightedData: any = localStorage.getItem('highLightedBox');
                        if (getHighLightedData) {
                            getHighLightedData = JSON.parse(getHighLightedData);
                            if (getHighLightedData.length > 0) {
                                getHighLightedData.push(highlightedData);
                            } else {
                                getHighLightedData.push(highlightedData);
                            }
    
                            localStorage.setItem('highLightedBox', JSON.stringify(getHighLightedData));
                        } else {
                            localStorage.setItem('highLightedBox', JSON.stringify([highlightedData]));
                        }
                    }

                }


                this.param = params['id'];
                if (params['id'] == 1) {
                    this.data = chapter1JsonData;
                    this.generalApiService.chapterDetails.id = 1;
                    this.generateIDs('chap1');
                } else if (params['id'] == 3) {
                    this.generalApiService.chapterDetails.id = 3;
                    this.data = chapter3CardJsonData;
                    this.generateIDs('chap3');
                } else if (params['id'] == 2) {
                    this.generalApiService.chapterDetails.id = 2;
                    this.generateIDs('chap2');
                    this.router.navigate(['/region']);
                } else if (params['id'] == 10) {
                    this.generalApiService.chapterDetails.id = 10;
                    this.data = centralWestAsia;
                    this.generateIDs('chap10');
                } else if (params['id'] == 11) {
                    this.generalApiService.chapterDetails.id = 11;
                    this.data = eastAsia;
                    this.generateIDs('chap11');
                } else if (params['id'] == 12) {
                    this.generalApiService.chapterDetails.id = 12;
                    this.data = pacific;
                    this.generateIDs('chap12');
                } else if (params['id'] == 13) {
                    this.generalApiService.chapterDetails.id = 13;
                    this.data = southasia;
                    this.generateIDs('chap13');
                } else if (params['id'] == 14) {
                    this.generalApiService.chapterDetails.id = 14;
                    this.data = southeastasia;
                    this.generateIDs('chap14');
                }  else if (params['id'] == 15) {
                    this.generalApiService.chapterDetails.id === 15;
                    this.data = financialHighlight;
                    this.generateIDs('chap15');
                } else if (params['id'] == 16) {
                    this.generalApiService.chapterDetails.id === 16;
                    this.data = privatesector;
                    this.generateIDs('chap16');
                }
                setTimeout(() => {
                    this.loading = false;
                }, 1000);

                this.generalApiService.chapterDetails.title = this.data[0].text;
            }
            );
    }

    ngAfterViewInit(): void {
        this.route.queryParams
            .subscribe(params => {
                if (params['parId'] || params['pid']) {
                    setTimeout(() => {
                        jQuery('html, body').animate({
                            scrollTop: jQuery('#' + (params['parId'] || params['pid'] || 0)).offset()?.top
                        }, 10);
                        this.generalApiService.updateHighlight.next(true);
                    }, 500);
                }
            });
    }

    generateIDs(uuid: any) {
        this.data.forEach((element: any, key: any) => {
            element.id = uuid + (key + 1);
        });
    }

    goToNextChapter() {
        window.scroll(0, 0);
        if (this.param == 1) {
            this.router.navigate(['/region']);
        } else if (this.param == 4) {
            this.router.navigate(['/appendixes-content']);
        }   else if (this.param == 2) {
            this.router.navigate(['/region']);
        } else if (this.param == 5) {
            this.router.navigate(['/appendixes-content']);
        } else if (this.param == 10) {
            this.data = eastAsia;
        } else if (this.param == 11) {
            this.data = pacific;
        } else if (this.param == 12) {
            this.data = southasia;
        } else if (this.param == 13) {
            this.data = southeastasia;
        } else if (this.param == 14) {
            this.data = chapter3CardJsonData;
        } else if (this.param == 16) {
            this.router.navigate(['/appendixes-content']);
        }

        this.param++;
    }

    context = {
        message: ''
    };

    isOpen = false;

    onSwipe(evt: any) {

        const x = Math.abs(evt.deltaX) > 40 ? (evt.deltaX > 0 ? 'right' : 'left') : '';
        if (x === 'left') {
            window.history.back();

        } else {
            window.history.forward();
        }
    }

}
