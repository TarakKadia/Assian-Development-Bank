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
        Chart.pluginService.register({
            beforeDraw: function (chart: any) {
                var width = chart.canvas.width,
                    height = chart.canvas.height,
                    ctx: any = chart.ctx
                    weight: 10

                ctx.restore();
                var fontSize = (height / 350).toFixed(2);
                ctx.font = fontSize + "em sans-serif";
                ctx.textBaseline = "middle";
                var text = 'Total Commitments'
                var text1 = 'By Region',

                    textX = Math.round((width - ctx.measureText(text).width) / 2),
                    textY = height / 2;

                    textX = Math.round((width - ctx.measureText(text1).width) / 2),
                    textY = height / 2;


                ctx.fillText(text, textX-20, textY+20);
                ctx.fillText(text1, textX, textY+30);
                ctx.save();

            }

        });
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
