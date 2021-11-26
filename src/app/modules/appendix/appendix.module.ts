import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppendixRoutingModule } from './appendix-routing.module';
import { AppendixesContentComponent } from './appendixes-content/appendixes-content.component';
import { AppendixesComponent } from './appendixes/appendixes.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeModule } from '../home/home.module';


@NgModule({
  declarations: [
    AppendixesContentComponent,
    AppendixesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppendixRoutingModule,
    
],
  exports:[
    AppendixesContentComponent,
    AppendixesComponent
  ]
})
export class AppendixModule { }
