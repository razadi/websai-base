import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
// routes
import { PAGES_ROUTES } from './pages.routes';
// modules
import { ComponentsModule } from '../components/components.module';
// 
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReferenciaComponent } from './referencia/referencia.component';
import { EmbarquesComponent } from './embarques/embarques.component';
import { AduanaComponent } from './aduana/aduana.component';
import { EstatusComponent } from './estatus/estatus.component';
import { BuscarComponent } from './buscar/buscar.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchembPipe } from '../pipes/search/searchemb.pipe';
import { FilesComponent } from './files/files.component';
import { PreviosComponent } from './previos/previos.component';
import { PedimentosComponent } from './pedimentos/pedimentos.component';
import { FacturasComponent } from './facturas/facturas.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ReporteadorComponent } from './reporteador/reporteador.component';
import { GraficasComponent } from './graficas/graficas.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { ReporteComponent } from './reporteador/reporte.component';
import { RepoviewComponent } from './reporteador/repoview.component';
import { GraficaembComponent } from './graficas/graficaemb.component';
import { GraficafacComponent } from './graficas/graficafac.component';
import { GraficakpiComponent } from './graficas/graficakpi.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ReferenciaComponent,
    EmbarquesComponent,
    AduanaComponent,
    EstatusComponent,
    BuscarComponent,
    ProfileComponent,
    SearchembPipe,
    FilesComponent,
    PreviosComponent,
    PedimentosComponent,
    FacturasComponent,
    ReportesComponent,
    ReporteadorComponent,
    GraficasComponent,
    EstadisticasComponent,
    CuentaComponent,
    ReporteComponent,
    RepoviewComponent,
    GraficaembComponent,
    GraficafacComponent,
    GraficakpiComponent
  ],
    imports: [
      CommonModule,
      ComponentsModule,
      FormsModule, 
      ReactiveFormsModule,
      PAGES_ROUTES,     
      // ChartsModule 
    ],
    exports: [
      PagesComponent,
      DashboardComponent
    ]
  })
  export class PagesModule { }