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
          labels: ['Asia Pacific Vaccine Access Facility', 'Other COVID-19 Operations'],
          datasets: [
            {
              data: [4058,6119],
              backgroundColor: [ '#f46e1a','#a7a6a6'],
              fill: false,
              borderWidth: 1,
              borderColor: [ '#f46e1a','#a7a6a6'],
              hoverBackgroundColor: [ '#f46e1a','#a7a6a6'],
              hoverBorderColor: [ '#f46e1a','#a7a6a6'],
            },
           
          ],
        },
        options: {
            layout:{
                padding:25
            },
          cutoutPercentage: 60,
          plugins: {
            labels: {
                render: function (args) {
                    return '$' + args.value;
                  },
                  fontColor:function (args) {
                      return args.value === 6119 ? '#a7a6a6' : '#f46e1a';
                  },
                  
                  fontSize:20,
                  precision: 0,
                  position:'outside',
                    textSize:1
                  
                  
                  
              }
          },
          
        legend: {
            display: false,
            position: 'left'
        },
        },
      });
  
  
      this.chart = new Chart('canvasOne', {
        type: 'doughnut',
        data: {
          labels: ['Asia Pacific Vaccine Access Facility', 'Other COVID-19 Operations'],
          datasets: [
            {
              data: [1071,1813],
              backgroundColor: [ '#f46e1a','#a7a6a6'],
              fill: false,
              borderWidth: 1,
              borderColor: [ '#f46e1a','#a7a6a6' ],
              hoverBackgroundColor: [ '#f46e1a','#a7a6a6' ],
              hoverBorderColor: [ '#f46e1a','#a7a6a6' ],
            },
          ],
        },
        options: {
            layout:{
                padding:25
            },
            cutoutPercentage: 60,
            plugins: {
                labels: {
                    render: function (args) {
                        return '$' + args.value;
                      },
                      fontColor:function (args) {
                          return args.value === 1813 ? '#a7a6a6' : '#f46e1a';
                      },
                      
                      fontSize:20,
                      precision: 0,
                      position:'outside',
                      textSize:1
                      
                      
                      
                  }
              },
            
            legend: {
                display: false,
            },
            tooltips: {
                enabled: true,
            },
        },
        
    });
    
    }

    

}
