import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { NavbarComponent } from './navbar/navbar.component';
import { GraficoBarraComponent } from './grafico-barra/grafico-barra.component';

@NgModule({
  declarations: [
    NavbarComponent,
    GraficoBarraComponent
  ],
  exports: [
    NavbarComponent,
    GraficoBarraComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ]
})
export class ComponentsModule { }
