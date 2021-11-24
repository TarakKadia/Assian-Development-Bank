import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() data:any;
  @Input() image:any;
  @Input() content:any;
  @Input() id:any;
  
  constructor() { }

  ngOnInit(): void {
    // console.log("this.data : ",this.data)
    // console.log(" this.image : ", this.image);
    
  }

}
