import { Component, Input, OnInit } from '@angular/core';
import { AccumulationChartComponent, AccumulationChart, AccumulationDataLabel, IAccLoadedEventArgs, AccumulationTheme, LogarithmicService } from '@syncfusion/ej2-angular-charts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  @Input() data:any;
  // single: any[];
  // second:any[];
  // view: any[] = [400, 400];

  // // options
  // gradient: boolean = true;
  // showLegend: boolean = true;
  // showLabels: boolean = true;
  // isDoughnut: boolean = false;
  // legendPosition: string = 'below';

  // colorScheme = {
  //   domain: ['#F67B50', '#ff4c00', ]
  // };

  constructor() {
    
    // Object.assign(this, { single });
    // Object.assign(this, { second });
  }

  ngOnInit(): void {
    // console.log("New Data", this.data);

    // let that=this.data
    // Object.assign(this, { that });
    // Object.assign(this, { second });
  }

  // public data: Object[] = [
  //   { x: 'Labour', y: 40, text: '18%' }, 
  //   { x: 'License', y: 20, text:'11%' },
    // { x: 'Legal', y: 8, text: '8%' },
    // { x: 'Production', y: 15, text: '15%' }, 
    

    
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
