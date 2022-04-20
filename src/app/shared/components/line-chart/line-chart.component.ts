import { Component, Input, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Color, ScaleType } from '@swimlane/ngx-charts';

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
    showLabels: boolean = false;
    animations: boolean = true;
    xAxis: boolean = true;
    yAxis: boolean = true;
    showYAxisLabel: boolean = true;
    showXAxisLabel: boolean = true;
    xAxisLabel: string = '';
    yAxisLabel: string = '';
    timeline: boolean = true;
   
    constructor() {
        this.multis = this.data;
    }
    colorScheme: Color = {
        name: 'myScheme',
        selectable: true,
        group: ScaleType.Ordinal,
        domain: ['#008ac5'],
      };

}
