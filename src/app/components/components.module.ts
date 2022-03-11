import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
// 
import { NavbarComponent } from './navbar/navbar.component';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { RsidebarComponent } from './rsidebar/rsidebar.component';
// 
import { ChartsModule } from 'ng2-charts';
import { GraficaDonaComponent } from './grafica-dona/grafica-dona.component';
import { GraficaLineComponent } from './grafica-line/grafica-line.component';
import { GraficaBarComponent } from './grafica-bar/grafica-bar.component';
import { GraficaPieComponent } from './grafica-pie/grafica-pie.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  declarations: [
    NavbarComponent,
    AsideComponent,
    FooterComponent,
    BreadcrumbsComponent,
    RsidebarComponent,
    GraficaDonaComponent,
    GraficaLineComponent,
    GraficaBarComponent,
    GraficaPieComponent,
  ],
  exports: [
    NavbarComponent,
    AsideComponent,
    FooterComponent,
    BreadcrumbsComponent,
    RsidebarComponent,
    GraficaDonaComponent,
    GraficaLineComponent,
    GraficaBarComponent,
    GraficaPieComponent,
  ]
})
export class ComponentsModule { }
