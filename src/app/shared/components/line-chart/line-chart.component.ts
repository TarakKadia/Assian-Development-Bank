import { Component, Input, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

    @Input() data:any;
    @Input() heading:any;
    ngOnInit(): void {
        console.log("deeppatelgreatestcoder",this.data);
        
    }

    multis: any = of([]);
    view: [number, number] = [500, 300];


    legend: boolean = true;
    showLabels: boolean = true;
    animations: boolean = true;
    xAxis: boolean = true;
    yAxis: boolean = true;
    showYAxisLabel: boolean = true;
    showXAxisLabel: boolean = true;
    xAxisLabel: string = 'Year';
    yAxisLabel: string = '';
    timeline: boolean = true;

    colorScheme = {
        domain: ['#ea522c']
    };

    constructor() {
        this.multis = this.data;
    }


}
