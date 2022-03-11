import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GraphsService {

  public dataGrafEmbA: any[] = [];
  public dataGrafFacA: any[] = [];
  public dataGrafKpiA: any[] = [];
  public dataGrafEmbM: any[] = [];
  public dataGrafFacM: any[] = [];
  public dataGrafKpiM: any[] = [];
  // 
  public barChartDataA: any[] = [];
  public barChartDataM: any[] = [];
  // 
  public barChartAduaA: any[] = [];
  public barChartAduaM: any[] = [];
  // 
  public lineChartDataFacturasA: any[] = [];
  // 
  public barChartDataEsta1: any[] = [];
  // Meses
  public monthLabelsFull = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  public monthLabelsShort = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

  constructor() {       
    this.getDataGraphics();
  }

  getDataGraphics() {
    // ***  Datos de las donas  *****************************************
    // Datos en el año
    this.dataGrafEmbA = [
      {total: '1030', impos: '661', expos: '369', ptota: '100', pimpo: '64', pexpo: '36'},
      {total: '1030', aicm: '650', tol: '125', mzn: '255', paicm: '63', ptol: '12', pmzn: '25'},
      {total: '1030', norma: '987', recti: '43', pnorma: '96', precti: '4'}
    ];
    this.dataGrafFacA = [
      {total: '316', pagadas: '255', porpagar: '61', ppagadas: '81', pporpagar: '19'},
      {total: '316', normales: '293', canceladas: '23', pnormales: '93', pcanceladas: '7'},
      {total: '316', pagadas: '255', porpagar: '61', ppagadas: '81', pporpagar: '19'}
    ];
    this.dataGrafKpiA = [];
    // Datos en el mes seleccionado
    this.dataGrafEmbM = [
      {total: '65', impos: '60', expos: '5', recti: '7', proce: '50', termi: '15', ptota: '100', pimpo: '92', pexpo: '8', prect: '11', pproc: '77', pterm: '23'}
    ];
    this.dataGrafFacM = [
      {total: ''}
    ];
    this.dataGrafKpiM = [];
    //  ***  Datos para la grafica de barras  *****************************************
    this.barChartDataA = [                                                   
      {data: [65, 59, 80, 81, 56, 55, 40, 59, 80, 81, 60, 0], label: 'Impo'},  //  661 ->  64
      {data: [28, 48, 40, 19, 86, 27, 90, 48, 40, 19, 5, 0], label: 'Expo'}    //  369 ->  36
    ];     
    this.barChartDataM = [                                                   
      {data: [65, 59, 80, 81, 56, 55, 40, 59, 80, 81, 60, 0], label: 'Impo'},  //  661 ->  64
      {data: [28, 48, 40, 19, 86, 27, 90, 48, 40, 19, 5, 0], label: 'Expo'}    //  369 ->  36
    ];                                                                       // 1030 -> 100
    // Para la grafica de barras de las estadisticas
    this.barChartDataEsta1 = [                                                   
      {data: [65, 59, 80, 81, 56, 55, 40, 59, 80, 81, 60, 20], label: '2017'},  //  661 ->  64
      {data: [28, 48, 40, 19, 86, 27, 90, 48, 40, 19, 5, 40], label: '2018'}    //  369 ->  36
    ];  

  // 
  this.lineChartDataFacturasA = [
    {data: [35, 19, 26, 32, 39, 28, 21, 35, 40, 19, 22, 0], label: 'Facturas'}
    // {data: {
    //   datasets: [{
    //         label: 'Bar Dataset',
    //         data: [10, 20, 30, 40]
    //       }, {
    //         label: 'Line Dataset',
    //         data: [50, 50, 50, 50],
  
    //         // Changes this dataset to become a line
    //         type: 'line'
    //       }],
    //   labels: ['January', 'February', 'March', 'April']
    // }}
  ];

    // 
    // this.aduas = [
    //   {adua: '470', anom: 'AICM', atot: '44', apor: '68', aimp: '40', apim: '91', aexp: '4', apex: '9'},
    //   {adua: '650', anom: 'TOL', atot: '7', apor: '11', aimp: '6', apim: '86', aexp: '1', apex: '14'},
    //   {adua: '160', anom: 'MZN', atot: '14', apor: '21', aimp: '14', apim: '100', aexp: '0', apex: '0'}
    // ];
  }
}
