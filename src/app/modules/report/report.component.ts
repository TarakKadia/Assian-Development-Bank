import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import buttonJsonData from "src/app/constants/button.json";
import chapter1JsonData from "src/app/constants/chapter1.json";
import chapter2CardJsonData from "../../constants/chapter2-cards.json"
import chapter3CardJsonData from "../../constants/chapter3.json"
import chapter4CardJsonData from "../../constants/chapter4.json";
import centralWestAsia from "../../constants/central-west-asia.json";
import eastAsia from "../../constants/east-asia.json";
import pacific from "../../constants/pacific.json";
import southasia from "../../constants/south-asia.json";
import southeastasia from "../../constants/south-east-asia.json";

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

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private generalApiService: GeneralApiService
    ) { }

   
    ngOnInit(): void {
       this.url = this.router.url;
        this.loading = true;
        this.chapter1Data = chapter1JsonData;
        this.button = buttonJsonData;

         this.route.queryParams
            .subscribe(params => {
                console.log(params['id']);
                this.param = params['id'];
                if (params['id'] == 1) {
                    this.data = chapter1JsonData;
                    this.generalApiService.chapterDetails.id = 1;
                    this.generateIDs('chap1');

                    console.log("this.data", this.data);
                    

                } else if (params['id'] == 4) {
                    this.generalApiService.chapterDetails.id = 4;
                    this.data = chapter4CardJsonData;
                } else if (params['id'] == 3) {
                    this.generalApiService.chapterDetails.id = 3;
                    this.data = chapter3CardJsonData;
                } else if (params['id'] == 2) {
                    this.generalApiService.chapterDetails.id = 2;
                    this.router.navigate(['/region']);
                } else if (params['id'] == 10) {
                    this.generalApiService.chapterDetails.id = 10;
                    this.data = centralWestAsia;
                } else if (params['id'] == 11) {
                    this.generalApiService.chapterDetails.id = 11;
                    this.data = eastAsia;
                } else if (params['id'] == 12) {
                    this.generalApiService.chapterDetails.id = 12;
                    this.data = pacific;
                } else if (params['id'] == 13) {
                    this.generalApiService.chapterDetails.id = 13;
                    this.data = southasia;
                } else if (params['id'] == 14) {
                    this.generalApiService.chapterDetails.id = 14;
                    this.data = southeastasia;
                }  else if (params['id'] == 15) {
                    this.generalApiService.chapterDetails.id === 15;
                    this.data = financialHighlight;
                    console.log('this.data', this.data);
                }
                setTimeout(() => {
                    this.loading = false;
                }, 1000);


                if (params['parId']) {
                    console.log("params['parId']", jQuery('#' + (params['parId'] || 0)));
                    setTimeout(() => {
                        jQuery('html, body').animate({
                            scrollTop: jQuery('#' + (params['parId'] || 0))?.offset()?.top
                        }, 1000);
                    }, 100);
                }

                this.generalApiService.chapterDetails.title = this.data[0].data;
            }
        );
    }

    ngAfterViewInit(): void {
        this.route.queryParams
            .subscribe(params => {
                if (params['parId']) {
                    console.log("params['parId']", jQuery('#' + (params['parId'] || 0)));
                    setTimeout(() => {
                        jQuery('html, body').animate({
                            scrollTop: jQuery('#' + (params['parId'] || 0)).offset()?.top
                        }, 1000);
                        this.generalApiService.updateHighlight.next(true);
                    }, 1000);
                }
            }
        );
    }

    generateIDs(uuid: any){
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
        } else if (this.param == 3) {
            this.data = chapter4CardJsonData;
        } else if (this.param == 2) {
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
        } else if (this.param == 15) {
            this.data = chapter4CardJsonData;
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
