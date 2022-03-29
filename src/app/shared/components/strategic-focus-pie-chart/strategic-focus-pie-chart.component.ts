import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { Chart, ChartType, } from 'chart.js';
import { trigger, state, style, animate, transition } from '@angular/animations';
import * as $ from 'jquery';

declare var jQuery: any;

// const style1 = style({
//     opacity: 1,
//     transform: "translateX(0)"
//   })

//   const style2 = style({
//     opacity: 0,
//     transform: "translateX(-100%)"
//   })
@Component({
    selector: 'app-strategic-focus-pie-chart',
    templateUrl: './strategic-focus-pie-chart.component.html',
    styleUrls: ['./strategic-focus-pie-chart.component.css'],
    // animations: [
    //     trigger('foobar', [
    //       state('show', style1),
    //       state('hide', style2),
    //       transition('show => hide', animate('700ms ease-out')),
    //       transition('hide => show', animate('700ms ease-in'))
    //     ])
    //   ]
})
export class StrategicFocusPieChartComponent implements OnInit, AfterViewInit {

    @Input() data: any;
    @Input() image: any;
    @Input() id: any;
    @Input() strategicTag: any;
    @Input() strategicHeading: any;
    
    state: any;
    inView = false;

    chart: any;
    constructor(public el: ElementRef) { }

    ngOnInit(): void {
        this.chart = new Chart('canvas' + this.id, {});
    }

    ngAfterViewInit() {
        this.renderChart();
        console.log(jQuery('#canvas' + this.id).offset());
    }

    // Scroll Animation Code Below

    // @HostListener('window:scroll', ['$event'])
    // checkScroll() {
    //   const componentPosition = this.el.nativeElement.offsetTop
    //   const scrollPosition = window.pageYOffset
    //   if (scrollPosition >= componentPosition - 250) {
    //     const chartOptions = {
    //         type: 'doughnut',
    //         data: this.data,

    //         options: {
    //             aspectRatio: 1,
    //             responsive: true,



    //             animation: {
    //                 duration: 2000
    //             },
    //             legend: {
    //                 display: false,


    //             },


    //             tooltips: {
    //                 enabled: false,
    //             },

    //         },

    //     };
    //     this.state =  new Chart('canvas' + this.id, chartOptions); 
    //   } else {
    //     this.state = 'show'
    //   }

    // }



    renderChart() {
    Chart.defaults.global.plugins['labels'] = false

        const chartOptions = {
            type: 'doughnut',
            data: this.data,

            options: {
                aspectRatio: 1,
                responsive: true,
                animation: {
                    duration: 2000
                },
                legend: {
                    display: false,
                },
                tooltips: {
                    enabled: false,
                },

            },
            plugins: [{
                beforeDraw: () => {
                    var width = chart.canvas.width,
                        height = chart.canvas.height,
                        ctx: any = chart.ctx

                    ctx.restore();
                    var fontSize = (height / 114).toFixed(2);
                    ctx.font = fontSize + "em sans-serif";
                    ctx.textBaseline = "middle";
                    var text = '90%',
                        textX = Math.round((width - ctx.measureText(text).width) / 2),
                        textY = height / 2;

                    ctx.beginPath();
                    ctx.arc(51, 51, 27, 0 * Math.PI, 2 * Math.PI);
                    ctx.fillStyle = '#f2ae29';
                    ctx.lineWidth = 0;
                    ctx.fill();
                    ctx.strokeStyle = '#FFFFFF';
                    ctx.measureFontColor = "#FFFFFF";
                    ctx.fillStyle = 'black';
                    ctx.stroke();

                    ctx.fillText(text, textX, textY);
                    ctx.save();
                }
            }]

        };

        const context: HTMLCanvasElement = document.getElementById('canvas' + this.id) as HTMLCanvasElement;
        const chart = new Chart(context, chartOptions);
    }



}



