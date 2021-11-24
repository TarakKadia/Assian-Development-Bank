import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.css']
})
export class SignatureComponent implements OnInit {

  @Input() signature:any;
  @Input() name:any;
  @Input() para1:any;
  @Input() para2:any;

  constructor() { }

  ngOnInit(): void {
  }

}
