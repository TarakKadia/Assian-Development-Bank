import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() image:any;
  @Input() tag:any;
  @Input() data:any;
  constructor() { }

  ngOnInit(): void {   
    // console.log("image : >>>> ",this.image);
     
  }

}
