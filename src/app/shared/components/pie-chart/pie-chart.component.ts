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
    public pieChartType = 'pie';

    constructor() { }

    ngOnInit(): void {
        console.log("pieChartttsss",this.data);
        this.chart = new Chart('canvas', {
            type: 'doughnut',
            data: this.data
        });
    }

}
