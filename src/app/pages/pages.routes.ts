import { Routes, RouterModule } from '@angular/router';

// compoanentes de pages
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AduanaComponent } from './aduana/aduana.component';
import { BuscarComponent } from './buscar/buscar.component';
import { EmbarquesComponent } from './embarques/embarques.component';
import { EstatusComponent } from './estatus/estatus.component';
import { ReferenciaComponent } from './referencia/referencia.component';
import { ProfileComponent } from './profile/profile.component';
import { PreviosComponent } from './previos/previos.component';
import { FilesComponent } from './files/files.component';
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


const PagesRoutes: Routes = [
  {
    path: '', 
    component: PagesComponent,
    // canActivate: [ LoginGuardGuard ], 
    children: [
      { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Información de Embarques', descripcion: 'Página principal del portal webSAAI'} },
      { path: 'facturas', component: FacturasComponent, data: { titulo: 'Información financiera', descripcion: 'Página de la infromación financiera'} },
      { path: 'reporte/:tipo', component: ReportesComponent, data: { titulo: 'Reporte', descripcion: 'Reporte seleccionado'} },
      { path: 'reporteador', component: ReporteadorComponent, data: { titulo: 'Reporteador', descripcion: 'Generación de reportes según necesidad'} },
      { path: 'reporteg/:id', component: ReporteComponent, data: { titulo: 'Reporte generador', descripcion: 'Reporte generador'} },
      { path: 'reportev/:id', component: RepoviewComponent, data: { titulo: 'Visualizar reporte', descripcion: 'Vista del reporte'} },
      
      { path: 'grafica/:tipo', component: GraficasComponent, data: { titulo: 'Gráficas', descripcion: 'Gráficas en general'} },
      { path: 'graficae', component: GraficaembComponent, data: { titulo: 'Gráficas embarques', descripcion: 'Gráficas en general'} },
      { path: 'graficaf', component: GraficafacComponent, data: { titulo: 'Gráficas facturas', descripcion: 'Gráficas en general'} },
      { path: 'graficak', component: GraficakpiComponent, data: { titulo: 'Gráficas indicadores', descripcion: 'Gráficas en general'} },

      { path: 'estadis/:tipo', component: EstadisticasComponent, data: { titulo: 'Estadísticas', descripcion: 'Estadisticas Generales'} },
      { path: 'pedi/:refe', component: PedimentosComponent, data: { titulo: 'Pedimento', descripcion: 'Pedimento seleccionado'} },
      { path: 'aduana/:adua', component: AduanaComponent, data: { titulo: 'Aduana', descripcion: 'Información de la Aduana'} },
      { path: 'buscar/:valor', component: BuscarComponent, data: { titulo: 'Buscar', descripcion: 'Resultados de la búsqueda'} },
      { path: 'embarques/:tipo', component: EmbarquesComponent, data: { titulo: 'Embarques', descripcion: 'Información de los embarques por tipo'} },
      { path: 'estatus/:refe', component: EstatusComponent, data: { titulo: 'Estatus', descripcion: 'Estatus del embarque seleccionado'} },
      { path: 'pedime/:refe', component: ReferenciaComponent, data: { titulo: 'Referencia', descripcion: 'Información general del pedimento'} },
      { path: 'previos/:refe', component: PreviosComponent, data: { titulo: 'Previo', descripcion: ''} },
      { path: 'files/:refe', component: FilesComponent, data: { titulo: 'Archivo Digital', descripcion: ''} },
      { path: 'profile', component: ProfileComponent, data: { titulo: 'Profile', descripcion: ''} },
      { path: 'cuenta/:folio', component: CuentaComponent, data: { titulo: 'Cuenta de Gastos', descripcion: 'Información de la cuenta de gastos'} },
      // { path: '', component: , data: { titulo: '', descripcion: ''} },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild( PagesRoutes );