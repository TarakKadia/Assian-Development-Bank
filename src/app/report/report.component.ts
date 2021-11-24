import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import buttonJsonData from "src/app/constants/button.json";
import chapter1JsonData from "src/app/constants/chapter1.json";
import chapter2CardJsonData from "../constants/chapter2-cards.json"
import chapter3CardJsonData from "../constants/chapter3.json"
import chapter4CardJsonData from "../constants/chapter4.json";
import centralWestAsia from "../constants/central-west-asia.json";
import eastAsia from "../constants/east-asia.json";
import pacific from "../constants/pacific.json";
import southasia from "../constants/south-asia.json";
import southeastasia from "../constants/south-east-asia.json";


@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

    chapter1Data: any;
    button: any;
    chapter2Data = [];
    data: any;
    loading: any;
    param: any;
    

    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.loading = true;
        this.chapter1Data = chapter1JsonData;
        this.button = buttonJsonData;

         this.route.queryParams
            .subscribe(params => {
                console.log(params['id']);
                this.param = params['id'];
                if (params['id'] == 1) {
                    this.data = chapter1JsonData;
                    console.log("this.data", this.data);

                } else if (params['id'] == 4) {
                    this.data = chapter4CardJsonData;
                } else if (params['id'] == 3) {
                    this.data = chapter3CardJsonData;
                } else if (params['id'] == 2) {
                    this.router.navigate(['/chapter2']);
                } else if (params['id'] == 10) {
                    this.data = centralWestAsia;
                } else if (params['id'] == 11) {
                    this.data = eastAsia;
                } else if (params['id'] == 12) {
                    this.data = pacific;
                } else if (params['id'] == 13) {
                    this.data = southasia;
                } else if (params['id'] == 14) {
                    this.data = southeastasia;
                }
                setTimeout(() => {
                    this.loading = false;
                }, 1000);
            }
        );
    }

    goToNextChapter() {
        window.scroll(0, 0);
        if (this.param == 1) {
            this.router.navigate(['/chapter2']);
        } else if (this.param == 4) {
            this.router.navigate(['/appendixes-content']);
        } else if (this.param == 3) {
            this.data = chapter4CardJsonData;
        } else if (this.param == 2) {
            this.router.navigate(['/chapter2']);
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
}
