import { GeneralApiService } from 'src/app/core/general-api.service';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import * as $ from 'jquery';

declare var jQuery: any;

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, AfterViewInit {


    @Input() title: any;
    @Input() gender: any;
    @Input() digit: any;
    @Input() data: any;
    @Input() sign: any;
    @Input() id: any;
    constructor(
        public generalApiService: GeneralApiService
    ) { }

    ngOnInit(): void {
        // this.animateValue("count1", 0, this.digit, 2000);
        this.numberCounter();

        this.generalApiService.updateHighlight.subscribe((isAdded) => {
            if (isAdded) {
                this.setBookmarkedHighLight();
            }
        })
    }

    ngAfterViewInit(): void {
        setTimeout(() => {

            jQuery(".counter-box-hover").on("mouseover", (event) => {
                var target = jQuery(event.target);
                if (target.is('.box-hover')) {
                    jQuery('#hover-box').css('display', 'block');

                    const className = target.attr('class').split(' ');
                    const id = target.attr('id');
                    var class_names = '#' + id + '.' + className[0] + '.' + className[1] + '.' + className[2];

                    let value = jQuery(class_names).find('h3').text();
                    this.generalApiService.selectedBox.text = value;
                    this.generalApiService.selectedBox.id = id;

                    let data = jQuery(class_names).find('p.box-data').text();
                    if (data) {
                        this.generalApiService.selectedBox.data = data;
                    }

                    var position = jQuery(class_names).offset();
                    var width = jQuery(class_names).width() / 2;

                    jQuery('#hover-box').css('top', (position.top - 60) + 'px');
                    jQuery('#hover-box').css('left', (position.left + width - 60) + 'px');
                } else {
                    jQuery('#hover-box').css('display', 'none');
                }
            });

            // jQuery(".counter-box-hover").on("mouseleave", (event) => {
            //     var target = jQuery(event.target);
            //     if (!target.is('#hover-box')) {
            //         jQuery('#hover-box').css('display', 'none');
            //     }
            // });
            this.setBookmarkedHighLight();
        }, 2000);

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
            step: function (now: any) {
                $('#count').text(now.toFixed(1));
            }
        });
    }

    setBookmarkedHighLight() {
        let highLightedBookmarkData: any = localStorage.getItem('highLightedBox');
        if (highLightedBookmarkData) {
            highLightedBookmarkData = JSON.parse(highLightedBookmarkData);
            if (highLightedBookmarkData.length > 0) {
                highLightedBookmarkData.forEach(element => {
                    if (element.highLightedData.paraId === this.id) {
                        jQuery('#' + this.id).addClass('highlightBox');
                    }
                });
            } else {
                jQuery('#' + this.id).removeClass('highlightBox');
            }
        }
    }

}
