import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-caption',
  templateUrl: './caption.component.html',
  styleUrls: ['./caption.component.css']
})
export class CaptionComponent implements OnInit {

  @Input() data:any;

  constructor() {
  }
  
  ngOnInit(): void {
    // console.log("caption : ",this.data);
    
    
  }

}
