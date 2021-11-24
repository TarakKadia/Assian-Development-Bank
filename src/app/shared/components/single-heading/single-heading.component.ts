import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-heading',
  templateUrl: './single-heading.component.html',
  styleUrls: ['./single-heading.component.css']
})
export class SingleHeadingComponent implements OnInit {

  @Input() title:any;

  constructor() { }

  ngOnInit(): void {
  }

}
