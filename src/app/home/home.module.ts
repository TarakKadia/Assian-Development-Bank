import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppendixesComponent } from './appendixes/appendixes.component';
import { CardComponent } from './card/card.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { CounterCardComponent } from './counter-card/counter-card.component';
import { AppendixesContentComponent } from './appendixes-content/appendixes-content.component';
import { HomeRoutingModule } from './home-routing.module';
import { FinancialHighlightsComponent } from './financial-highlights/financial-highlights.component';
import { SharedModule } from '../shared/shared.module';
import { BoardOfDirectorsComponent } from './board-of-directors/board-of-directors.component';
import { MessageComponent } from './message/message.component';
// import { AppendixesContentComponent } from './appendixes-content/appendixes-content.component';



@NgModule({
  declarations: [
    CardComponent,
    SideMenuComponent,
    CounterCardComponent,
    AppendixesComponent,
    AppendixesContentComponent,
    FinancialHighlightsComponent,
    BoardOfDirectorsComponent,
    MessageComponent,
  ],

  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],

  exports: [
    CardComponent,
    SideMenuComponent,
    CounterCardComponent,
    AppendixesComponent,
    AppendixesContentComponent,
    FinancialHighlightsComponent,
    BoardOfDirectorsComponent,
    MessageComponent
  ]
})
export class HomeModule { }
