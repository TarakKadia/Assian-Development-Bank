import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { HomeModule } from './modules/home/home.module';
import { ReportModule } from './modules/report/report.module';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  
    { path: '',
     loadChildren: () => ReportModule },
  
  {
    path: '',
    component:HomeComponent
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
