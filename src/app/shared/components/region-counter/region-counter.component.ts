import { Component, Input, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-region-counter',
  templateUrl: './region-counter.component.html',
  styleUrls: ['./region-counter.component.css']
})
export class RegionCounterComponent implements OnInit {

  @Input() title:any;
  @Input() id:any;

  @Input() tag1:any;
  @Input() tag2:any;
  @Input() tag3:any;
  @Input() tag4:any;

  @Input() digit1:any;
  @Input() digit2:any;
  @Input() digit3:any;
  @Input() digit4:any;

  @Input() symbol:any;
  @Input() sign1:any;
  @Input() sign2:any;
  @Input() sign3:any;
  @Input() sign4:any;


  constructor() { }

  ngOnInit(): void {
    this.numberCounter1();
    this.numberCounter2();
    this.numberCounter3();
    this.numberCounter4();

    
  }

  numberCounter1() {
    setTimeout(() => {
      let id = '#counter1';
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
      let id = '#counter2';
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
      let id = '#counter3';
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
      let id = '#counter4';
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
