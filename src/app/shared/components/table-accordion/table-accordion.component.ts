import { Component, OnInit } from '@angular/core';
import tableJson from '../../../constants/table-accordion.json'
declare var $: any;

@Component({
  selector: 'app-table-accordion',
  templateUrl: './table-accordion.component.html',
  styleUrls: ['./table-accordion.component.css']
})
export class TableAccordionComponent implements OnInit {

    tableJsonData: Array<any> = [];
    titles: Array<any> = [];
  
    constructor() { }
  
    ngOnInit(): void {
      this.tableJsonData = tableJson;
    }
    openAccordin(event: any){
      $(event.currentTarget).toggleClass("open").next(".fold").toggleClass("open");
  
    }



}

