import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionComponent } from './region/region.component';

import { ReportComponent } from './report.component';

const routes: Routes = [
    { path: 'report', component: ReportComponent },
    { path: 'region', component: RegionComponent },
   
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReportRoutingModule { }