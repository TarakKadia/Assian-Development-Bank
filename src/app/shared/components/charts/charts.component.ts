import { Component, Input, OnInit } from '@angular/core';
import { AccumulationChartComponent, AccumulationChart, AccumulationDataLabel, IAccLoadedEventArgs, AccumulationTheme, LogarithmicService } from '@syncfusion/ej2-angular-charts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  @Input() data:any;
  constructor() {}

  ngOnInit(): void {
  }

 

    
    //Initializing Legend
    public legendSettings: Object = {
        visible: true,
        position: 'Top'
    };
    //Initializing DataLabel
    public dataLabel: Object = {
        visible: true,
        name: 'text',
        position: 'Inside',
        font: {
            fontWeight: '600',
            color: '#ffffff'
        }
    };
     // custom code start
    public load(args: IAccLoadedEventArgs): void {
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.accumulation.theme = <AccumulationTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");
    };
     // custom code end
    public startAngle: number = 0;
    public endAngle: number = 360;
    public tooltip: Object = { enable: true };
    



  




}
