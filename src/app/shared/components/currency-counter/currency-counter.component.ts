import { Component, Input, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-currency-counter',
  templateUrl: './currency-counter.component.html',
  styleUrls: ['./currency-counter.component.css']
})
export class CurrencyCounterComponent implements OnInit {

  constructor() { }
  @Input() title:any;
  @Input() tag1:any;
  @Input() tag2:any;
  @Input() tag3:any;
  @Input() tag4:any;
  @Input() tag5:any;
  @Input() digit1:any;
  @Input() digit2:any;
  @Input() digit3:any;
  @Input() digit4:any;
  @Input() digit5:any;
  @Input() sign:any;
  @Input() symbol:any;
  @Input() id:any;
  ngOnInit(): void {

    this.numberCounter1();
    this.numberCounter2();
    this.numberCounter3();
    this.numberCounter4();
    this.numberCounter5();

  }

  numberCounter1() {
    setTimeout(() => {
      let id = '#dynamic-number1';
      var currentNumber = $(id).text();

      let number = Number(currentNumber)
      $({ numberValue: 0 }).animate({ numberValue: number }, {
        duration: 2000,
        easing: 'linear',
        step: function (now) {
          $(id).text(now.toFixed(1));
        }
      });
    }, 100);

  }

  numberCounter2() {
    setTimeout(() => {
      let id = '#dynamic-number2';
      var currentNumber = $(id).text();

      let number = Number(currentNumber)
      $({ numberValue: 0 }).animate({ numberValue: number }, {
        duration: 2000,
        easing: 'linear',
        step: function (now) {
          $(id).text(now.toFixed(1));
        }
      });
    }, 100);

  }

  numberCounter3() {
    setTimeout(() => {
      let id = '#dynamic-number3';
      var currentNumber = $(id).text();

      let number = Number(currentNumber)
      $({ numberValue: 0 }).animate({ numberValue: number }, {
        duration: 2000,
        easing: 'linear',
        step: function (now) {
          $(id).text(now.toFixed(1));
        }
      });
    }, 100);

  }

  numberCounter4() {
    setTimeout(() => {
      let id = '#dynamic-number4';
      var currentNumber = $(id).text();

      let number = Number(currentNumber)
      $({ numberValue: 0 }).animate({ numberValue: number }, {
        duration: 2000,
        easing: 'linear',
        step: function (now) {
          $(id).text(now.toFixed(1));
        }
      });
    }, 100);

  }

  numberCounter5() {
    setTimeout(() => {
      let id = '#dynamic-number5';
      var currentNumber = $(id).text();

      let number = Number(currentNumber)
      $({ numberValue: 0 }).animate({ numberValue: number }, {
        duration: 2000,
        easing: 'linear',
        step: function (now) {
          $(id).text(now.toFixed(1));
        }
      });
    }, 100);

  }


}
