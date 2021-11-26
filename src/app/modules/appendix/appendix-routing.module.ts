import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppendixesContentComponent } from './appendixes-content/appendixes-content.component';

const routes: Routes = [
    {
        path: 'appendixes-content',
        component: AppendixesContentComponent
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppendixRoutingModule { }
