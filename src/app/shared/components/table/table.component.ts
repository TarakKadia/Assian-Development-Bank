import { Component, Input, OnInit } from '@angular/core';
declare var $: any;

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

    @Input() tableJson: Array<any>;
    @Input() heading: any;
    @Input() subHeading: any;
    @Input() note: any;

    tableJsonData: Array<any> = [];
    titles: Array<any> = [];

    constructor() { }

    ngOnInit(): void {
        this.tableJsonData = this.tableJson;
    }

    openAccordin(event: any){
        $(event.currentTarget).toggleClass("open").next(".fold").toggleClass("open");
    }

}
