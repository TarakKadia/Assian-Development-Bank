import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Chart, ChartType, } from 'chart.js';

declare var jQuery: any;

@Component({
  selector: 'app-strategic-focus-pie-chart',
  templateUrl: './strategic-focus-pie-chart.component.html',
  styleUrls: ['./strategic-focus-pie-chart.component.css']
})
export class StrategicFocusPieChartComponent implements OnInit,AfterViewInit{
    
@Input() data:any;
@Input() image:any;
@Input() id:any;
  chart: any;
  constructor() { }

  ngOnInit(): void {
   
    console.log("Deep Rockstarrrrr",this.data);
    

  }
    
ngAfterViewInit(){
    
    this.chart = new Chart('canvas' +this.id, {
        type: 'doughnut',
        data: this.data,
       
        options: {
            
             aspectRatio: 1,
            responsive: true,

            animation: {
                duration: 10000
            },
            legend: {
                display: false,
                
                
            },
            
            
            tooltips: {
                enabled: false,
            },
            
        },
        
    });

    let centerTextt= this.data.centerText;
    let centerId =  this.data.id;
    let centerColor =  this.data.centerColor;
        
    Chart.pluginService.register({
        beforeDraw: function (chart: any) {
            console.log("chartchartchartchart",chart.canvas);
            
            var width = chart.canvas.width,
                height = chart.canvas.height,
                ctx: any = chart.ctx
    
            ctx.restore();
            var fontSize = (height / 114).toFixed(2);
            ctx.font = fontSize + "em sans-serif";
            ctx.textBaseline = "middle";
            var text = '90%',
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = height / 2;
    
            ctx.beginPath();
            ctx.arc(51, 51, 27, 0 * Math.PI, 2 * Math.PI);
            ctx.fillStyle = '#f2ae29';
            ctx.lineWidth = 0;
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.measureFontColor= "#FFFFFF";
            ctx.fillStyle = 'black';
            ctx.stroke();
    
            ctx.fillText(text, textX, textY);
            ctx.save();
    
        }
    
    });
    }
}



