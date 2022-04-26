import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-region-title',
  templateUrl: './region-title.component.html',
  styleUrls: ['./region-title.component.css']
})
export class RegionTitleComponent implements OnInit {

  @Input() regionTitle:any;
  @Input() region:any;
  @Input() content:any;

  constructor() { }

  ngOnInit(): void {
    
  }

}
