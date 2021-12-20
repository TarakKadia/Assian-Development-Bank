import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'app-stacked-horizontal-chart',
    templateUrl: './stacked-horizontal-chart.component.html',
    styleUrls: ['./stacked-horizontal-chart.component.css']
})
export class StackedHorizontalChartComponent implements OnInit {

@Input() data:any;
@Input() heading:any;
    multi: any[] = [];
    view: [number, number] = [700, 400];

    // options
    showXAxis: boolean = true;
    showYAxis: boolean = true;
    gradient: boolean = false;
    showLegend: boolean = true;
    legendPosition: string = 'below';
    showXAxisLabel: boolean = true;
    yAxisLabel: string = '';
    showYAxisLabel: boolean = true;
    xAxisLabel = '';
    scheme= true;

    colorScheme:string[] = ['#ea522c', '#ea522c', '#ea522c'];
    schemeType: string = 'linear';

    constructor() {
    }

    


    ngOnInit(): void {
        this.multi=this.data
    }

}
