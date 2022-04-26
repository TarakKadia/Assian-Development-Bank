
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import counterCardsJsonData from "src/app/constants/counterCards.json";
import * as $ from 'jquery';

@Component({
  selector: 'app-counter-card',
  templateUrl: './counter-card.component.html',
  styleUrls: ['./counter-card.component.css']
})
export class CounterCardComponent implements OnInit {

  @Input() data :any;
  @Input() currency:any;
  @Input() money:any;
  @Input() letter:any;
  @Input() duration:any;
  @Input() digit:any;
  @Input() id:any;
  @Input() steps:any;
  

  @ViewChild("animatedDigit") animatedDigit!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.numberCounter();
  }

  numberCounter() {
    setTimeout(() => {
      let id = '#dynamic-number' + this.id;
      var currentNumber = $(id).text();
  
      let number = Number(currentNumber)
      $({ numberValue: 0 }).animate({ numberValue: number  }, {
        duration: 2000,
        easing: 'linear',
        step: function (now) {
          $(id).text(now.toFixed(1));
        }
      });
    }, 100);
      
    }
}
