import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },

    {
        path: '',
        loadChildren: () => import('./modules/report/report.module').then(m => m.ReportModule),
    },
    {
        path: "**",
        component: HomeComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
