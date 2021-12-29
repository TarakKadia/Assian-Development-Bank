import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppendixesContentComponent } from '../appendix/appendixes-content/appendixes-content.component';
import { BoardOfDirectorsComponent } from './board-of-directors/board-of-directors.component';
import { FinancialHighlightsComponent } from './financial-highlights/financial-highlights.component';
import { HomeComponent } from './home.component';
import { PresidentsMessageComponent } from './presidents-message/presidents-message.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'financial-highlights',
    component: FinancialHighlightsComponent
  },
  {
    path: 'presidents-message',
    component: PresidentsMessageComponent
  },
  {
    path: 'board-of-directors',
    component: BoardOfDirectorsComponent
  },
  
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }