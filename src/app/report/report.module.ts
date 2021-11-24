import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report.component';
import { ReportRoutingModule } from './report-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeModule } from '../home/home.module';
import { Chapter2Component } from './chapter2/chapter2.component';




@NgModule({
  declarations: [
    ReportComponent,
    Chapter2Component,
    
  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    SharedModule,
    HomeModule,
  ]
})
export class ReportModule { }
