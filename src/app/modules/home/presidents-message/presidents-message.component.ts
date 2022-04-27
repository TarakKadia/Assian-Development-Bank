import { GeneralApiService } from './../../../core/general-api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import presidentsMessage from 'src/app/constants/president.json'

@Component({
    selector: 'app-presidents-message',
    templateUrl: './presidents-message.component.html',
    styleUrls: ['./presidents-message.component.css']
})
export class PresidentsMessageComponent implements OnInit {


    data: Array<any> = [];
    title: any;
    tagLine: any;
    imageGrid: any;
    loading: any;
    url: any;
    constructor(
        private router: Router,
        private generalApiService: GeneralApiService
    ) { }

    ngOnInit(): void {
        this.url = this.router.url;
        this.generalApiService.url = this.url;
        this.loading = true;
        setTimeout(() => {
            this.loading = false;
        }, 1000);

        this.data = presidentsMessage;
        this.title = presidentsMessage[16].title;
        this.tagLine = presidentsMessage[16].tagLine;
        this.imageGrid = presidentsMessage[16].imageGrid;
        this.generateIDs();


    }

    generateIDs() {
        this.data.forEach((element: any, key: any) => {
            element.id = key + 1;
        });
    }

    goToNextChapter() {
        this.router.navigate(['/board-of-directors'])
    }

}
