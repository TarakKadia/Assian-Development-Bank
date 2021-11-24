import { Component, Input, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {


  @Input() title:any;
  @Input() gender:any;
  @Input() digit:any;
  @Input() data:any;
  @Input() sign:any;
  constructor() { }

  ngOnInit(): void {
    // this.animateValue("count1", 0, this.digit, 2000);
    this.numberCounter();

  }
  // animateValue(id, start, end, duration) {
  //   if (start === end) return;
  //   var range = end - start;
  //   var current = start;
  //   var increment = end > start ? 1 : -1;
  //   var stepTime = Math.abs(Math.floor(duration / range));
  //   var obj = document.getElementById(id);
  //   var timer = setInterval(function () {
  //     current += increment;
  //     obj.innerHTML = current;
  //     if (current == end) {
  //       clearInterval(timer);
  //     }
  //   }, stepTime);
  // }

  numberCounter() {
    var currentNumber = $('#count').text();    

    $({ numberValue: currentNumber }).animate({ numberValue: 58 }, {
      duration: 1500,
      easing: 'linear',
      step: function (now:any) {
        $('#count').text(now.toFixed(1));
      }
    });
  }

}
