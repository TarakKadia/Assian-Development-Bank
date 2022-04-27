import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { CoreRoutingModule } from './core-routing.module';



@NgModule({
  declarations: [
    
    MenuBarComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [
    
    MenuBarComponent
  ],
})
export class CoreModule { }
