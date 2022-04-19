import { Component, OnInit } from '@angular/core';
import { Chart, ChartType, } from 'chart.js';
import chp1Data from '../../../constants/chapter1.json';
@Component({
    selector: 'app-progress-bar-chart',
    templateUrl: './progress-bar-chart.component.html',
    styleUrls: ['./progress-bar-chart.component.css']
})
export class ProgressBarChartComponent implements OnInit {
    
    chart: any;
    constructor() { }
    
    ngOnInit(): void {
        
        console.log("chp1Data >>>>>>>> ",chp1Data);
        
        
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
                ctx.arc(100, 50, 25, 0 * Math.PI, 2 * Math.PI);
                ctx.fillStyle = '#8AC007';
                ctx.lineWidth = 0;
                ctx.fill();
                ctx.strokeStyle = '#FFFFFF';
                ctx.fillStyle = 'black';
                ctx.stroke();
        
                ctx.fillText(text, textX, textY);
                ctx.save();
        
            }
        
        });

        this.chart = new Chart('canvas1', {
            type: 'doughnut',
            data: {
                labels: ['', 'Regional',],
                datasets: [
                    {
                        label: "1",
                        data: [75, 25],
                        backgroundColor: ['rgba(255, 0, 0, 0.1)', '#FFFFFF',],
                        hoverBackgroundColor: ['rgba(255, 0, 0, 0.1)', '#FFFFFF',],
                        hoverBorderColor: ['rgba(255, 0, 0, 0.1)', '#FFFFFF',],
                        fill: true
                    },
                    {
                        label: "2",
                        data: [50, 25, 25],
                        backgroundColor: [' #ff9933', '#e0e0d1', '#FFFFFF',],
                        hoverBackgroundColor: ['#ff9933', '#e0e0d1', '#FFFFFF',],
                        hoverBorderColor: [' #ff9933', '#e0e0d1', '#FFFFFF',],
                        fill: true
                    },
                ]
            },
            options: {
                animation: {
                    duration: 6000
                },
                legend: {
                    display: false,

                },


                tooltips: {
                    enabled: false,
                },

            },

        });




        // this.chart = new Chart('canvas2', {
        //     type: 'doughnut',
        //     data: {
        //         labels: ['', 'Regional',],
        //         datasets: [
        //             {
        //                 label: "1",
        //                 data: [75, 25],
        //                 backgroundColor: ['rgba(255, 0, 0, 0.1)', '#FFFFFF',],
        //                 hoverBackgroundColor: ['rgba(255, 0, 0, 0.1)', '#FFFFFF',],
        //                 hoverBorderColor: ['rgba(255, 0, 0, 0.1)', '#FFFFFF',],
        //                 fill: true
        //             },
        //             {
        //                 label: "2",
        //                 data: [75, 65, 10],
        //                 backgroundColor: ['#1D3658', '#399DAC', '#FFFFFF',],
        //                 hoverBackgroundColor: ['#1D3658', '#399DAC', '#FFFFFF',],
        //                 hoverBorderColor: ['#1D3658', '#399DAC', '#FFFFFF',],
        //                 fill: true
        //             },
        //         ]
        //     },
        //     options: {
        //         animation: {
        //             duration: 6000,
        //         },
        //         legend: {

        //             display: false,

        //         },
        //         tooltips: {
        //             enabled: false,
        //         }
        //     }
        // });


        // this.chart = new Chart('canvas3', {
        //     type: 'doughnut',
        //     data: {
        //         labels: ['', 'Regional',],
        //         datasets: [
        //             {
        //                 label: "1",
        //                 data: [75, 25,],
        //                 backgroundColor: ['rgba(255, 0, 0, 0.1)', '#FFFFFF',],
        //                 hoverBackgroundColor: ['rgba(255, 0, 0, 0.1)', '#FFFFFF',],
        //                 hoverBorderColor: ['rgba(255, 0, 0, 0.1)', '#FFFFFF',],
        //                 fill: true
        //             },
        //             {
        //                 label: "2",
        //                 data: [75, 25, 10],
        //                 backgroundColor: ['#989ADD', '#D685B6', '#FFFFFF',],
        //                 hoverBackgroundColor: ['#989ADD', '#D685B6', '#FFFFFF',],
        //                 hoverBorderColor: ['#989ADD', '#D685B6', '#FFFFFF',],
        //                 fill: true
        //             },
        //         ]
        //     },
        //     options: {
        //         animation: {
        //             duration: 6000,
        //         },
        //         legend: {
        //             display: false,

        //         },
        //         tooltips: {
        //             enabled: false,
        //         }
        //     }
        // });



        // this.chart = new Chart('canvas4', {
        //     type: 'doughnut',
        //     data: {
        //         labels: ['', 'Regional',],
        //         datasets: [
        //             {
        //                 label: "1",
        //                 data: [75, 25,],
        //                 backgroundColor: ['rgba(255, 0, 0, 0.1)', '#FFFFFF',],
        //                 hoverBackgroundColor: ['rgba(255, 0, 0, 0.1)', '#FFFFFF',],
        //                 hoverBorderColor: ['rgba(255, 0, 0, 0.1)', '#FFFFFF',],
        //                 fill: true
        //             },
        //             {
        //                 label: "2",
        //                 data: [60, 20, 5],
        //                 backgroundColor: ['#AAE0A3', '#62BDCB', '#FFFFFF',],
        //                 hoverBackgroundColor: ['#AAE0A3', '#62BDCB', '#FFFFFF',],
        //                 hoverBorderColor: ['#AAE0A3', '#62BDCB', '#FFFFFF',],
        //                 fill: true
        //             },
        //         ]
        //     },
        //     options: {
        //         animation: {
        //             duration: 6000,
        //         },
        //         legend: {
        //             display: false,

        //         },
        //         tooltips: {
        //             enabled: false,
        //         }
        //     }
        // });

        // this.chart = new Chart('canvas5', {
        //     type: 'doughnut',
        //     data: {
        //         labels: ['', 'Regional',],
        //         datasets: [
        //             {
        //                 label: "1",
        //                 data: [75, 25,],
        //                 backgroundColor: ['rgba(255, 0, 0, 0.1)', '#FFFFFF',],
        //                 hoverBackgroundColor: ['rgba(255, 0, 0, 0.1)', '#FFFFFF',],
        //                 hoverBorderColor: ['rgba(255, 0, 0, 0.1)', '#FFFFFF',],
        //                 fill: true
        //             },
        //             {

        //                 label: "2",
        //                 data: [40, 20, 40],
        //                 backgroundColor: [' #ff9933', '#e0e0d1', '#FFFFFF',],
        //                 hoverBackgroundColor: ['#ff9933', '#e0e0d1', '#FFFFFF',],
        //                 hoverBorderColor: [' #ff9933', '#e0e0d1', '#FFFFFF',],
        //                 fill: true
        //             },
        //         ]
        //     },
        //     options: {
        //         animation: {
        //             duration: 6000,
        //         },
        //         legend: {
        //             display: false,

        //         },
        //         tooltips: {
        //             enabled: false,
        //         }
        //     }
        // });

        // this.chart = new Chart('canvas6', {
        //     type: 'doughnut',
        //     data: {
        //         labels: ['', 'Regional',],
        //         datasets: [
        //             {
        //                 label: "1",
        //                 data: [75, 25,],
        //                 backgroundColor: ['rgba(255, 0, 0, 0.1)', '#FFFFFF',],
        //                 hoverBackgroundColor: ['rgba(255, 0, 0, 0.1)', '#FFFFFF',],
        //                 hoverBorderColor: ['rgba(255, 0, 0, 0.1)', '#FFFFFF',],
        //                 fill: true
        //             },
        //             {
        //                 label: "2",
        //                 data: [60, 20, 5],
        //                 backgroundColor: ['#AAE0A3', '#62BDCB', '#FFFFFF',],
        //                 hoverBackgroundColor: ['#AAE0A3', '#62BDCB', '#FFFFFF',],
        //                 hoverBorderColor: ['#AAE0A3', '#62BDCB', '#FFFFFF',],
        //                 fill: true
        //             },
        //         ]
        //     },
        //     options: {
        //         animation: {
        //             duration: 6000,
        //         },
        //         legend: {
        //             display: false,

        //         },
        //         tooltips: {
        //             enabled: false,
        //         }
        //     }
        // });

        // this.chart = new Chart('canvas7', {
        //     type: 'doughnut',
        //     data: {
        //         labels: ['', 'Regional',],
        //         datasets: [
        //             {
        //                 label: "1",
        //                 data: [75, 25,],
        //                 backgroundColor: ['rgba(255, 0, 0, 0.1)', '#FFFFFF',],
        //                 hoverBackgroundColor: ['rgba(255, 0, 0, 0.1)', '#FFFFFF',],
        //                 hoverBorderColor: ['rgba(255, 0, 0, 0.1)', '#FFFFFF',],
        //                 fill: true
        //             },
        //             {
        //                 label: "2",
        //                 data: [25, 25, 50],
        //                 backgroundColor: [' #ff9933', '#e0e0d1', '#FFFFFF',],
        //                 hoverBackgroundColor: ['#ff9933', '#e0e0d1', '#FFFFFF',],
        //                 hoverBorderColor: [' #ff9933', '#e0e0d1', '#FFFFFF',],
        //                 fill: true
        //             },
        //         ]
        //     },
        //     options: {
        //         animation: {
        //             duration: 6000,
        //         },
        //         legend: {
        //             display: false,

        //         },
        //         tooltips: {
        //             enabled: false,
        //         }
        //     }
        // });

    }

}
