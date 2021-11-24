import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-region-heading',
  templateUrl: './region-heading.component.html',
  styleUrls: ['./region-heading.component.css']
})
export class RegionHeadingComponent implements OnInit {

  constructor() { }
@Input() data:any;
@Input() country:any;
  ngOnInit(): void {
  }

}
