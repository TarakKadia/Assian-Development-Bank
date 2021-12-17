import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { multi } from './data';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

    ngOnInit(): void {
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
    yAxisLabel: string = 'Population';
    timeline: boolean = true;

    colorScheme = {
        domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
    };

    constructor() {
        this.multis = of(multi);
    }


}
