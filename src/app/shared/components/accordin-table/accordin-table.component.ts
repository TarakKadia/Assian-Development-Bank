import { Component, Input, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-accordin-table',
  templateUrl: './accordin-table.component.html',
  styleUrls: ['./accordin-table.component.css']
})
export class AccordinTableComponent implements OnInit {

    @Input() tableJson:Array<any>;
    @Input() heading:any;
    @Input() subHeading:any;
    @Input() note:any;
    @Input() class:any;
    @Input() trClass:any;
    @Input() headingClass:any;

    


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
