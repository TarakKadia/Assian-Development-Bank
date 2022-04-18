import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }
  @Input() data:any

  ngOnInit(): void {
      console.log("this.datathis.datathis.data",this.data);
      
  }

}
