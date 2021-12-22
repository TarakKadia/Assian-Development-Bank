import { Component, Input, OnInit } from '@angular/core';

import { ChartOptions, ChartType, ChartDataSets, Chart } from 'chart.js';
import { Label, BaseChartDirective } from 'ng2-charts';


import * as chart from 'chart.js';
@Component({
    selector: 'app-stacked-horizontal-chart',
    templateUrl: './stacked-horizontal-chart.component.html',
    styleUrls: ['./stacked-horizontal-chart.component.css']
})
export class StackedHorizontalChartComponent implements OnInit {

    @Input() data: any;
    @Input() heading: any;


    public barChartOptions: ChartOptions = {
        responsive: true,
        scales: {
            xAxes: [{
                ticks: {
                    min: 0
                }
            }]
        }
    };
    public barChartLabels: any[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    public barChartType: ChartType = 'horizontalBar';
    public barChartLegend = true;
    public barChartPlugins = [];
    public barChartData: ChartDataSets[] = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B ' },

    ];



    // multi: any[] = [];
    // view: [number, number] = [700, 400];

    // showXAxis: boolean = true;
    // showYAxis: boolean = true;
    // gradient: boolean = false;
    // showLegend: boolean = true;
    // legendPosition: string = 'below';
    // showXAxisLabel: boolean = true;
    // yAxisLabel: string = '';
    // showYAxisLabel: boolean = true;
    // xAxisLabel = '';
    // scheme= true;

    // colorScheme:string[] = ['#ea522c', '#ea522c', '#ea522c'];
    // schemeType: string = 'linear';

    constructor() {
    }




    ngOnInit(): void {
        // this.multi=this.data
    }

}
