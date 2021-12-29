import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-management-image-grid',
  templateUrl: './management-image-grid.component.html',
  styleUrls: ['./management-image-grid.component.css']
})
export class ManagementImageGridComponent implements OnInit {

@Input() data:any;
@Input() title:any;
@Input() tagLine:any;
@Input() imageGrid:any;
  constructor() { }

  ngOnInit(): void {
      
  }

}
