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
@Input() imageGrid1:any;
@Input() imageGrid2:any;
@Input() imageGrid3:any;
@Input() imageGrid4:any;
@Input() imageGrid5:any;
@Input() imageGrid6:any;
@Input() imageGrid7:any;


  constructor() { }

  ngOnInit(): void {
      
  }

}
