import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Chart, ChartType } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit, AfterViewInit {

    @Input() data: any
    @Input() id: any
    chart: any;
    public pieChartType = 'pie';

    constructor() { }

    ngOnInit(): void {
    }
    
    ngAfterViewInit() {
        console.log("pieChartttsss",this.id+1);
        let canvasId = 'canvas'+ this.id;
        console.log('canvasId', canvasId);
        this.chart = new Chart(canvasId, {
            type: 'doughnut',
            data: this.data
        });

    }

}
