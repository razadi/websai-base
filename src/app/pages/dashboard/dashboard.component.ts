import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  datos: any[] = [];
  refes: any[] = [];
  aduas: any[] = [];

  nrefes: any[];

  doughnutChartLabels: string[] = [];
  doughnutChartData: number[] = [];
  doughnutChartColors: any[] = [];
  doughnutChartOptions: any = 
    {
      legend: {
         display: false
      },
      tooltips: {
         enabled: true
      },
      cutoutPercentage: 70
     };

  // 
  public barChartOptions: any = { scaleShowVerticalLines: false,
                                  responsive: true,
                                  legend: {
                                    display: false
                                 }
                                };
  public barChartLabels: string[];
  public barChartLegend: boolean; 
  public barChartData: any[];
  public barChartColors: any[];

  // para la grafica de lineas
  public lineChartData: any[]; 
  public lineChartLabels: string[];
  public lineChartOptions: any = {
                                  responsive: true
                                };
  public lineChartColors: any[];
  public lineChartLegend: boolean;

  // variables qeu deben ser globales para todo el sistema
  gAduActual: string = 'AICM';
  gMesActual: string = 'Noviembre';
  gAnoActual: string = '2018';

  filter: string;

 
  constructor() { 

    this.datos = [
      {total: '65', impos: '60', expos: '5', recti: '7', proce: '50', termi: '15', ptota: '100', pimpo: '92', pexpo: '8', prect: '11', pproc: '77', pterm: '23'}
    ];

    this.doughnutChartLabels = ['Impor.', 'Expor.', 'Recti.', 'Desp.'];
    this.doughnutChartData = [this.datos[0].impos, this.datos[0].expos, this.datos[0].recti, this.datos[0].termi];
    this.doughnutChartColors = [{ backgroundColor: ['#745af2', '#99abb4', '#ef5350', '#398bf7']}];
    // la grafica de barras
    this.barChartLabels = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    this.barChartLegend = false;
    this.barChartData = [
      {data: [65, 59, 80, 81, 56, 55, 40, 59, 80, 81, 60, 0], label: 'Impo'},
      {data: [28, 48, 40, 19, 86, 27, 90, 48, 40, 19, 5, 0], label: 'Expo'}
    ];
    this.barChartColors = [
      { // first color
        backgroundColor: 'rgb(59, 140, 246)',
        borderColor: 'rgb(59, 140, 246)',
        pointBackgroundColor: 'rgb(59, 140, 246)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(59, 140, 246)'
      },
      { // second color
        backgroundColor: 'rgb(153, 171, 180)',
        borderColor: 'rgb(153, 171, 180)',
        pointBackgroundColor: 'rgb(153, 171, 180)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(153, 171, 180)'
      }];

      // para la grafica de lineas
      this.lineChartData = [
        {data: [2, 3, 2, 1, 2, 0, 0, 3, 4, 2, 2, 1, 0, 0, 3, 2, 2, 4, 5, 0, 0, 2, 1, 1, 5, 4, 0, 0, 2, 3, 4], label: 'Embarques'},
        {data: [2, 3, 2, 1, 2, 0, 0, 3, 4, 2, 2, 1, 0, 0, 3, 2, 2, 1, 5, 0, 0, 2, 1, 0, 5, 4, 0, 0, 2, 3, 4], label: 'Importación'},
        {data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0], label: 'Exportación'}
      ];
      this.lineChartLabels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
      this.lineChartColors = [
        { // grey rgb(116, 90, 242)
          backgroundColor: 'rgba(116,90,242,0.2)',
          borderColor: 'rgba(116,90,242,0.5)',
          pointBackgroundColor: 'rgba(116,90,242,0.5)',
          pointBorderColor: 'rgba(116,90,242,0.5)', // '#745af2',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(116,90,242,0.8)'
        },
        { // dark grey
          backgroundColor: 'transparent', // 'rgba(59,140,246,0.2)',
          borderColor: 'rgba(59,140,246,1)',
          pointBackgroundColor: 'rgba(59,140,246,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(59,140,246,1)'
        },
        { // grey
          backgroundColor: 'transparent', // 'rgba(153,171,180,0.2)',
          borderColor: 'rgba(153,171,180,1)',
          pointBackgroundColor: 'rgba(153,171,180,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(153,171,180,0.8)'
        }
      ];
      this.lineChartLegend = false;


    this.refes = [
      {NUM_REFE: 'REF18000001', NUM_PEDI: '00000001', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'I', EDOR: 'PRO' },
      {NUM_REFE: 'REF18000001', NUM_PEDI: '00000001', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'E', EDOR: 'PRO' },
      {NUM_REFE: 'REF18000001', NUM_PEDI: '00000001', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'I', EDOR: 'RET' },
      {NUM_REFE: 'REF18000001', NUM_PEDI: '00000001', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'I', EDOR: 'PRO' },
      {NUM_REFE: 'REF18000001', NUM_PEDI: '00000001', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'I', EDOR: 'PRO' },
      {NUM_REFE: 'REF18000001', NUM_PEDI: '00000001', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'R', EDOR: 'TER' },
      {NUM_REFE: 'REF18000001', NUM_PEDI: '00000001', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'E', EDOR: 'PRO' },
      {NUM_REFE: 'REF18000001', NUM_PEDI: '00000001', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'I', EDOR: 'RET' },
      {NUM_REFE: 'REF18000001', NUM_PEDI: '00000001', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'I', EDOR: 'PRO' },
      {NUM_REFE: 'REF18000001', NUM_PEDI: '00000001', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'I', EDOR: 'TER' },
      {NUM_REFE: 'REF18000001', NUM_PEDI: '00000001', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'I', EDOR: 'RET' },
      {NUM_REFE: 'REF18000001', NUM_PEDI: '00000001', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'I', EDOR: 'RET' },
      {NUM_REFE: 'REF18000001', NUM_PEDI: '00000001', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'I', EDOR: 'TER' },
      {NUM_REFE: 'REF18000001', NUM_PEDI: '00000001', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'I', EDOR: 'PRO' },
      {NUM_REFE: 'REF18000001', NUM_PEDI: '00000001', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'I', EDOR: 'PRO' },
      {NUM_REFE: 'REF18000001', NUM_PEDI: '00000001', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'I', EDOR: 'TER' }
    ];

    this.nrefes = this.refes;

    this.aduas = [
      {adua: '470', anom: 'AICM', atot: '44', apor: '68', aimp: '40', apim: '91', aexp: '4', apex: '9'},
      {adua: '650', anom: 'TOL', atot: '7', apor: '11', aimp: '6', apim: '86', aexp: '1', apex: '14'},
      {adua: '160', anom: 'MZN', atot: '14', apor: '21', aimp: '14', apim: '100', aexp: '0', apex: '0'}
    ];
  }

  ngOnInit() {

  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }
  
  public chartHovered(e: any): void {
    console.log(e);
  }

  onChangeFilter(event) {
    // console.log(event);
    if (event === '0') {
      this.refes = this.nrefes;
    } else {
      this.refes = this.nrefes;
      this.refes = this.refes.filter(data => data.EDOR === event);
    }    
  }

}
