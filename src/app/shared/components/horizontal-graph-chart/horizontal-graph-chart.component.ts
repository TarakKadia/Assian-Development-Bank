import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-horizontal-graph-chart',
    templateUrl: './horizontal-graph-chart.component.html',
    styleUrls: ['./horizontal-graph-chart.component.css']
})
export class HorizontalGraphChartComponent implements OnInit {
    @Input() data: any;

    multi: Array<any> = [];
    view: any[] = [400, 200];

    // options


    showXAxis: boolean = true;
    showYAxis: boolean = true;
    gradient: boolean = false;
    showLegend: boolean = true;
    showXAxisLabel: boolean = true;
    yAxisLabel: string = 'Country';
    showYAxisLabel: boolean = true;
    xAxisLabel: string = 'Population';

    colorScheme = {
        domain: ['#d94e2f', '#b4b5b4', ]
    };

    constructor() {

    }

    onSelect(event: any) {
    }

    ngOnInit(): void {
        let that = this.data
        Object.assign(this, { that });

    }

}
