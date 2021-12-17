import { Component, Input, OnInit } from '@angular/core';
import { Chart, ChartType } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

    @Input() data: any
    chart: any;
    // public pieChartLabels = ['Profit Q1', 'Profit Q2', 'Profit Q3', 'Profit Q4'];
    // public pieChartData = [83, 91, 107, 73];
    public pieChartType = 'pie';

    constructor() { }

    ngOnInit(): void {
    }

}
