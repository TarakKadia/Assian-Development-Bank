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

        Chart.defaults.global.plugins['labels'] = false
        this.chart = new Chart('canvas' + this.id, {});
    }
    


    
    ngAfterViewInit() {
        let canvasId = 'canvas'+ this.id;
        this.chart = new Chart(canvasId, {
            type: 'doughnut',
            data: this.data
        });

    }

    

}
