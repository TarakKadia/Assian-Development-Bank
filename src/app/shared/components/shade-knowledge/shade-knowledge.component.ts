import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shade-knowledge',
  templateUrl: './shade-knowledge.component.html',
  styleUrls: ['./shade-knowledge.component.css']
})
export class ShadeKnowledgeComponent implements OnInit {

  constructor() { }
@Input() para1:any;
@Input() para2:any;
@Input() para3:any;
@Input() para4:any;
@Input() para5:any;
@Input() para6:any;
@Input() para7:any;
@Input() para8:any;
@Input() para9:any;
@Input() para10:any;
@Input() para11:any;
@Input() para12:any;
@Input() para13:any;
@Input() quote:any;
@Input() title:any;
@Input() image:any;
  ngOnInit(): void {
  }

}
