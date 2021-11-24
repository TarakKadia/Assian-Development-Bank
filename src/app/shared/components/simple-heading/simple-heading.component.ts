import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-heading',
  templateUrl: './simple-heading.component.html',
  styleUrls: ['./simple-heading.component.css']
})
export class SimpleHeadingComponent implements OnInit {

  @Input() simpleHeading:any;
  constructor() { }

  ngOnInit(): void {
    // console.log("heading",this.simpleHeading);
    
  }

}
