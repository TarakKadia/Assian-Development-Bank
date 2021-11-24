import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appendixes-list',
  templateUrl: './appendixes-list.component.html',
  styleUrls: ['./appendixes-list.component.css']
})
export class AppendixesListComponent implements OnInit {

  @Input() data:any;
  @Input() content:any;

  constructor() { }

  ngOnInit(): void {
  }

}
