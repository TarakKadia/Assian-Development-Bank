import { Component, Input, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-accordin-table',
  templateUrl: './accordin-table.component.html',
  styleUrls: ['./accordin-table.component.css']
})
export class AccordinTableComponent implements OnInit {

    @Input() tableJson:any;
    @Input() heading:any;

    tableJsonData: Array<any> = [];
    titles: Array<any> = [];
  
    constructor() { }
  
    ngOnInit(): void {
      this.tableJsonData = this.tableJson;
      console.log('this.tableJsonData', this.tableJsonData);
    }
    openAccordin(event: any){
      $(event.currentTarget).toggleClass("open").next(".fold").toggleClass("open");
  
    }

}
