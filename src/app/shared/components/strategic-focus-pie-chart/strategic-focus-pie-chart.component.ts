import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Chart, ChartType, } from 'chart.js';
import * as $ from 'jquery';

declare var jQuery: any;

@Component({
    selector: 'app-strategic-focus-pie-chart',
    templateUrl: './strategic-focus-pie-chart.component.html',
    styleUrls: ['./strategic-focus-pie-chart.component.css']
})
export class StrategicFocusPieChartComponent implements OnInit, AfterViewInit {

    @Input() data: any;
    @Input() image: any;
    @Input() id: any;
    inView = false;

    chart: any;
    constructor() { }

    ngOnInit(): void {       

        this.chart = new Chart('canvas' + this.id, {}); 
    }

    ngAfterViewInit() {
        this.renderChart();
        
    }
    getPosition(event){
        let offsetLeft = 0;
        let offsetTop = 0;
    
        let el = event.srcElement;
    console.log("elelelelel",el);
    
        while(el){
            offsetLeft += el.offsetLeft;
            offsetTop += el.offsetTop;
            el = el.parentElement;
        }
        console.log("offsetTop:offsetTop , offsetLeft:offsetLeft",offsetTop , offsetLeft);
        return { offsetTop:offsetTop , offsetLeft:offsetLeft }
        
    }

    renderChart() {
        const chartOptions = {
            type: 'doughnut',
            data: this.data,

            options: {
                
                    plugins: {
                        deferred: {           // enabled by default
                            xOffset: 14394,     // defer until 150px of the canvas width are inside the viewport
                            yOffset: 4855,   // defer until 50% of the canvas height are inside the viewport
                            delay: 1000        // delay of 500 ms after the canvas is considered inside the viewport
                        }
                    },
                

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

        };

        this.chart = new Chart('canvas' + this.id, chartOptions);

        let centerTextt = this.data.centerText;
        let centerId = this.data.id;
        let centerColor = this.data.centerColor;

        Chart.pluginService.register({
            beforeDraw: function (chart: any) {

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

        });
    }
}



