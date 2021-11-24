import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { ReportModule } from './report/report.module';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  
    { path: '', loadChildren: () => ReportModule },
  
  {
    path: '',
    loadChildren: () => HomeModule,
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
