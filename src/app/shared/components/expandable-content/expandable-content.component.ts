import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-expandable-content',
  templateUrl: './expandable-content.component.html',
  styleUrls: ['./expandable-content.component.css']
})
export class ExpandableContentComponent implements OnInit {

  constructor() { }

  
  @Input() data:any;
  @Input() title:any;
  @Input() image:any;
  isExpand:boolean = false;
  ngOnInit(): void {
    
  }
  readMore(){
    this.isExpand ? this.isExpand=false:this.isExpand=true
    
    
  }

}
