import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, HostListener, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Chart, ChartType, } from 'chart.js';
import { trigger, state, style, animate, transition } from '@angular/animations';
import * as $ from 'jquery';

declare var jQuery: any;

@Component({
    selector: 'app-strategic-focus-pie-chart',
    templateUrl: './strategic-focus-pie-chart.component.html',
    styleUrls: ['./strategic-focus-pie-chart.component.css'],
   
})
export class StrategicFocusPieChartComponent implements OnInit, AfterViewInit, OnChanges {

    @Input() data: any;
    @Input() image: any;
    @Input() id: any;
    @Input() strategicTag: any;
    @Input() strategicHeading: any;
    
    textX: any;
    textY: any;
    state: any;
    inView = false;

    chart: any;
    constructor(public el: ElementRef) { }

    ngOnInit(): void {
        this.chart = new Chart('canvas' + this.id, {});
        
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.chart?.chart?.update();        
    }

    ngAfterViewInit() {
        this.renderChart();
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
                beforeDraw: (chart) => {
                    var width = chart.chart.width,
                        height = chart.chart.height,
                        ctx: any = chart.ctx
                    ctx.restore();
                    var fontSize = (height / 114).toFixed(2);
                    ctx.font = fontSize + "em sans-serif";
                    ctx.textBaseline = "middle";
                    this.data.datasets.map(centerTxt => {
                        var text = centerTxt.centerText,
                            textX = Math.round((width - ctx.measureText(text).width) / 2),
                            textY = height / 2;

                        ctx.beginPath();
                        ctx.arc(40, 40, 27, 0 * Math.PI, 2 * Math.PI);
                        ctx.fillStyle = '#f2ae29';
                        ctx.lineWidth = 0;
                        ctx.fill();
                        ctx.strokeStyle = '#FFFFFF';
                        ctx.measureFontColor = "#FFFFFF";
                        ctx.fillStyle = 'black';
                        ctx.stroke();

                        ctx.fillText(text, textX, textY);
                        ctx.save();
                    })
                }
            }]

        };

        const context: HTMLCanvasElement = document.getElementById('canvas' + this.id) as HTMLCanvasElement;
        const chart = new Chart(context, chartOptions);
    }



}


