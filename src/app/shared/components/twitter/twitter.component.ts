import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent implements OnInit {

  constructor() { }
  @Input() data:any;
  ngOnInit(): void {
  }

}
