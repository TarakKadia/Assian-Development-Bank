import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Chapter2Component } from './chapter2/chapter2.component';

import { ReportComponent } from './report.component';

const routes: Routes = [
    { path: 'report', component: ReportComponent },
    { path: 'chapter2', component: Chapter2Component },
   
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReportRoutingModule { }