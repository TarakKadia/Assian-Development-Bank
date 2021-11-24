import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-expandable-content-two',
  templateUrl: './expandable-content-two.component.html',
  styleUrls: ['./expandable-content-two.component.css']
})
export class ExpandableContentTwoComponent implements OnInit {

  constructor() { }
@Input() title:any;
@Input() data:any;
@Input() image:any;

isExpand:boolean = false;

  ngOnInit(): void {
  // console.log("image>>>>>>>>>>" , this.image);
  
  }

  readMore(){
    this.isExpand ? this.isExpand=false:this.isExpand=true
    
    
  }
}
