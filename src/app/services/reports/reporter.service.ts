import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReporterService {

  public reportes: any[] = [];

  constructor() { 
    // Muestra los reportes creado sólo por el usuario, esto de la base de datos
    this.reportes = [
      {id: 1, title: 'Reporte General', type: 'O', description: 'Repoprte que muestra los datos generales de las operaciones', created: ''},
      {id: 2, title: 'Operaciones por aduana', type: 'O', description: 'Reporte de operacions agrupadas por aduana', created: ''},
      {id: 3, title: 'Rectificaciones', type: 'O', description: 'Reporte de operaciones rectificadas', created: ''},
      {id: 4, title: 'Tipos de operaciones', type: 'O', description: 'Reporte de las operaciones agrupadas por su tipo', created: ''},
      {id: 5, title: 'Cuentas de gastos', type: 'F', description: 'Reporte de las cuentas de gastos', created: ''},
      {id: 6, title: 'Impuestos pagados', type: 'F', description: 'Reporte de los impuestos pagados por operación', created: ''},
      {id: 7, title: 'Tiempos de despacho', type: 'I', description: 'Reporte que muestra los KPIs de las operaciones', created: ''}
    ];
  }

}
