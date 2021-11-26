import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HomeRoutingModule } from './home-routing.module';
import { FinancialHighlightsComponent } from './financial-highlights/financial-highlights.component';
import { SharedModule } from '../../shared/shared.module';
import { BoardOfDirectorsComponent } from './board-of-directors/board-of-directors.component';
import { MessageComponent } from './message/message.component';
import { AppendixModule } from '../appendix/appendix.module';
import { CoreModule } from 'src/app/core/core.module';
// import { AppendixesContentComponent } from './appendixes-content/appendixes-content.component';



@NgModule({
  declarations: [
    CardComponent,
    SideMenuComponent,
    FinancialHighlightsComponent,
    BoardOfDirectorsComponent,
    MessageComponent,
  
    
  ],

  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    AppendixModule,
    CoreModule
  ],

  exports: [
    CardComponent,
    SideMenuComponent,
    FinancialHighlightsComponent,
    BoardOfDirectorsComponent,
    MessageComponent,
]
})
export class HomeModule { }
