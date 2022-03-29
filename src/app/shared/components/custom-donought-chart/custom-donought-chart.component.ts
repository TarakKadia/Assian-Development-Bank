import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-custom-donought-chart',
  templateUrl: './custom-donought-chart.component.html',
  styleUrls: ['./custom-donought-chart.component.css']
})
export class CustomDonoughtChartComponent implements OnInit {

    chart: any;
    ctx3: any;
  ngOnInit() {
    Chart.defaults.global.plugins['labels'] = false
      this.chart = new Chart('canvas', {
          
        type: 'doughnut',
        data: {
          labels: ['Data1', 'Data2'],
          datasets: [
            {
              data: [35, 65],
              backgroundColor: [ '#a7a6a6' ,'#f46e1a'],
              fill: false,
              borderWidth: 1,
              borderColor: [ '#a7a6a6' ,'#f46e1a' ],
              hoverBackgroundColor: [ '#a7a6a6' ,'#f46e1a' ],
              hoverBorderColor: [ '#a7a6a6' ,'#f46e1a' ],
            },
           
          ],
        },
        options: {
          cutoutPercentage: 60,
          
  
        //   pieceLabel: {
        //     mode: 'value',
        //     position: 'outside',
        //     fontColor: '#000',  
        //     segment: true
        // },
        // title: {
        //     display: true,
        //     text: '$2,905',
        //     fontSize: 20,
        //     fontColor:'#8cd8f7',
        //     fontStyle: 'bold'
        // },
        legend: {
            display: false,
            position: 'left'
        },
        },
      });
  
  
      this.chart = new Chart('canvasOne', {
        type: 'doughnut',
        data: {
          labels: ['Data1', 'Data2'],
          datasets: [
            {
              data: [10, 90],
              backgroundColor: [ '#a7a6a6' ,'#f46e1a'],
              fill: false,
              borderWidth: 1,
              borderColor: [ '#a7a6a6' ,'#f46e1a' ],
              hoverBackgroundColor: [ '#a7a6a6' ,'#f46e1a' ],
              hoverBorderColor: [ '#a7a6a6' ,'#f46e1a' ],
            },
          ],
        },
        options: {
            cutoutPercentage: 60,
            
            legend: {
                display: false,
            },
            tooltips: {
                enabled: false,
            },
        },
        
    });
    
    }

    

}
