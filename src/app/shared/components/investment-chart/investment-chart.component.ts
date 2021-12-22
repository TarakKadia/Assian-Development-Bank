import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-investment-chart',
  templateUrl: './investment-chart.component.html',
  styleUrls: ['./investment-chart.component.css']
})
export class InvestmentChartComponent implements OnInit {

    @Input() data:any;
  constructor() { }

  ngOnInit(): void {
  }

}
