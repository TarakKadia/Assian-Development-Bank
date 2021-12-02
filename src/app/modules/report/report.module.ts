import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { HomeModule } from '../home/home.module';
import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';
import { RegionComponent } from './region/region.component';
import { CoreModule } from 'src/app/core/core.module';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { HammerModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    ReportComponent,
    RegionComponent,    
  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    SharedModule,
    HomeModule,
    CoreModule,
    PopoverModule.forRoot(),
    HammerModule
  ]
    
})
export class ReportModule { }
