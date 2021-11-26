import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { CoreRoutingModule } from './core-routing.module';



@NgModule({
  declarations: [
    HeaderComponent,
    MenuBarComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [
    HeaderComponent,
    MenuBarComponent
  ],
})
export class CoreModule { }
