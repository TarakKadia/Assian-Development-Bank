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
        
    }

    multis: any = of([]);
    view: [number, number] = [400 ,300];


    legend: boolean = false;
    showLabels: boolean = true;
    animations: boolean = true;
    xAxis: boolean = true;
    yAxis: boolean = true;
    showYAxisLabel: boolean = true;
    showXAxisLabel: boolean = true;
    xAxisLabel: string = '';
    yAxisLabel: string = '';
    timeline: boolean = true;

    public colorScheme = {
        domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
      };
    constructor() {
        this.multis = this.data;
    }


}
