import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
@NgModule({
  declarations: [
    LayoutComponent,

    FooterComponent,
    SidebarComponent,
    NavbarComponent,
  
  ],
  imports: [CommonModule, LayoutRoutingModule, HttpClientModule],
})
export class LayoutModule {}
