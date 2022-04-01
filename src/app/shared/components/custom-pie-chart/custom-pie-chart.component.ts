import { Component, OnInit } from '@angular/core';
import { Chart,ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label } from 'ng2-charts';
// import * as pluginLabels from 'chartjs-plugin-labels';
import { Color } from 'ng2-charts/lib/color';
import 'chartjs-plugin-labels';

export type CustomColor = Color & {
    weight?: number
}

@Component({
  selector: 'app-custom-pie-chart',
  templateUrl: './custom-pie-chart.component.html',
  styleUrls: ['./custom-pie-chart.component.css']
})
export class CustomPieChartComponent implements OnInit {
    
    pieChartOptions: ChartOptions;
    pieChartLabels: Label[];
    pieChartData: SingleDataSet;
    pieChartType: ChartType;
    pieChartLegend: boolean;
    pieChartPlugins = [];
    
    ngOnInit() {

      this.pieChartOptions = this.createOptions();
      this.pieChartLabels = [[''], ['2021 Covid-19 Operation', '2021 NON-Covid-19 Operation']];
      this.pieChartData = [[71,35], [26826,13151]];
      this.pieChartType = 'pie';
      this.pieChartLegend = false;
    //   this.pieChartPlugins = [pluginLabels];
      
    }
  
  
  
  
    
    public doughnutChartColors: CustomColor[] = [
      // Colors for Dataset1
      {
        backgroundColor: ['#f46e1a','#a7a6a6'],
        borderWidth: 1,
        borderColor: ['#FFF','#FFF']  
      },
    
      // Colors for Dataset2
      {
        backgroundColor: ['#f46e1a','#a7a6a6'],
        borderWidth: 2,
        borderColor: ['#f46e1a','#a7a6a6']  ,
        weight:10
  
  
      }
    ];
  
   
  
    private createOptions(): ChartOptions {
      return {
          
          
          responsive: true,
          maintainAspectRatio: true,
          tooltips: {enabled: false},
          hover: {mode: null},
          plugins: { 
              labels: {
                  render: function (args) {
                      if(args.value == 35 || args.value == 71){
                          return ''
                      }else{
                          return '$' + args.value;
                      }
                    },
                    fontColor:function (args) {
                         return args.value === 35 ? '#a7a6a6' : '#FFF'  &&  args.value === 71 ? '#f46e1a' : '#FFF';
                    },
                    fontSize:20,
                    precision: 0,
                    
                    
                    
                }
            },
      };
    }

}
