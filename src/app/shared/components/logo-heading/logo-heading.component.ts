import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo-heading',
  templateUrl: './logo-heading.component.html',
  styleUrls: ['./logo-heading.component.css']
})
export class LogoHeadingComponent implements OnInit {

  constructor() { }
@Input() data:any;
@Input() image:any;
  ngOnInit(): void {
  }

}
