import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {

  facts: any[] = [];
  nfacts: any[] = [];
  // variables
  facturas: number;
  cobradas: number;
  porcobra: number;
  cancelas: number;
  pcobradas: any;
  pporcobra: any;
  pcancelas: any;
  facturasAno: number = 821;
  cobradasAno: number = 630;
  porcobraAno: number = 141;
  cancelasAno: number = 50;
  valfacturas: number = 1232455.23;

  // para la grafica de lineas
  public lineChartData: any[]; 
  public lineChartLabels: string[];
  public lineChartOptions: any = {
    responsive: true,
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        gridLines: {
          display: false
        }
      }]
    }
  };
  public lineChartColors: any[];
  public lineChartLegend: boolean;

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

  gAduActual: string = 'AICM';
  gMesActual: string = 'Noviembre';
  gAnoActual: string = '2018';
  

  constructor() { 
    // las facturas
    this.facts = [
      {NUM_REFE: 'REF18000001', NUM_SERIE: 'A', FOL_FACT: 2399, FEC_FACT: '10/11/2018 11:40:44 a. m.', FACT_UUID: '12BA786C-376F-47B8-ADD3-88E8C8C043D0', FEC_TIMB: '15/11/2018 11:40:47 a. m.', RAZ_FACT: 'INTELIGENCIA SOLAR MEXICO SA  DE CV', RFC_FACT: 'ISM1010187F2', TOT_INGRS: 7432.65, EDO_CUEN: '4'},
      {NUM_REFE: 'REF18000021', NUM_SERIE: 'A', FOL_FACT: 2400, FEC_FACT: '15/11/2018 11:40:44 a. m.', FACT_UUID: '12BA786C-376F-47B8-ADD3-88E8C8C043D0', FEC_TIMB: '15/11/2018 11:40:47 a. m.', RAZ_FACT: 'INTELIGENCIA SOLAR MEXICO SA  DE CV', RFC_FACT: 'ISM1010187F2', TOT_INGRS: 7432.65, EDO_CUEN: '6'},
      {NUM_REFE: 'REF18000002', NUM_SERIE: 'A', FOL_FACT: 2401, FEC_FACT: '15/11/2018 11:40:44 a. m.', FACT_UUID: '12BA786C-376F-47B8-ADD3-88E8C8C043D0', FEC_TIMB: '15/11/2018 11:40:47 a. m.', RAZ_FACT: 'INTELIGENCIA SOLAR MEXICO SA  DE CV', RFC_FACT: 'ISM1010187F2', TOT_INGRS: 7432.65, EDO_CUEN: '4'},
      {NUM_REFE: 'REF18000003', NUM_SERIE: 'A', FOL_FACT: 2402, FEC_FACT: '15/11/2018 11:40:44 a. m.', FACT_UUID: '12BA786C-376F-47B8-ADD3-88E8C8C043D0', FEC_TIMB: '15/11/2018 11:40:47 a. m.', RAZ_FACT: 'INTELIGENCIA SOLAR MEXICO SA  DE CV', RFC_FACT: 'ISM1010187F2', TOT_INGRS: 7432.65, EDO_CUEN: '4'},
      {NUM_REFE: 'REF18000004', NUM_SERIE: 'A', FOL_FACT: 2403, FEC_FACT: '15/11/2018 11:40:44 a. m.', FACT_UUID: '12BA786C-376F-47B8-ADD3-88E8C8C043D0', FEC_TIMB: '15/11/2018 11:40:47 a. m.', RAZ_FACT: 'INTELIGENCIA SOLAR MEXICO SA  DE CV', RFC_FACT: 'ISM1010187F2', TOT_INGRS: 7432.65, EDO_CUEN: '4'},
      {NUM_REFE: 'REF18000005', NUM_SERIE: 'A', FOL_FACT: 2404, FEC_FACT: '15/11/2018 11:40:44 a. m.', FACT_UUID: '12BA786C-376F-47B8-ADD3-88E8C8C043D0', FEC_TIMB: '15/11/2018 11:40:47 a. m.', RAZ_FACT: 'INTELIGENCIA SOLAR MEXICO SA  DE CV', RFC_FACT: 'ISM1010187F2', TOT_INGRS: 7432.65, EDO_CUEN: '4'},
      {NUM_REFE: 'REF18000006', NUM_SERIE: 'A', FOL_FACT: 2405, FEC_FACT: '15/11/2018 11:40:44 a. m.', FACT_UUID: '12BA786C-376F-47B8-ADD3-88E8C8C043D0', FEC_TIMB: '15/11/2018 11:40:47 a. m.', RAZ_FACT: 'INTELIGENCIA SOLAR MEXICO SA  DE CV', RFC_FACT: 'ISM1010187F2', TOT_INGRS: 7432.65, EDO_CUEN: '4'},
      {NUM_REFE: 'REF18000007', NUM_SERIE: 'A', FOL_FACT: 2406, FEC_FACT: '15/11/2018 11:40:44 a. m.', FACT_UUID: '12BA786C-376F-47B8-ADD3-88E8C8C043D0', FEC_TIMB: '15/11/2018 11:40:47 a. m.', RAZ_FACT: 'INTELIGENCIA SOLAR MEXICO SA  DE CV', RFC_FACT: 'ISM1010187F2', TOT_INGRS: 7432.65, EDO_CUEN: '4'},
      {NUM_REFE: 'REF18000008', NUM_SERIE: 'A', FOL_FACT: 2407, FEC_FACT: '15/11/2018 11:40:44 a. m.', FACT_UUID: '12BA786C-376F-47B8-ADD3-88E8C8C043D0', FEC_TIMB: '15/11/2018 11:40:47 a. m.', RAZ_FACT: 'INTELIGENCIA SOLAR MEXICO SA  DE CV', RFC_FACT: 'ISM1010187F2', TOT_INGRS: 7432.65, EDO_CUEN: '6'},
      {NUM_REFE: 'REF18000009', NUM_SERIE: 'A', FOL_FACT: 2408, FEC_FACT: '15/11/2018 11:40:44 a. m.', FACT_UUID: '12BA786C-376F-47B8-ADD3-88E8C8C043D0', FEC_TIMB: '15/11/2018 11:40:47 a. m.', RAZ_FACT: 'INTELIGENCIA SOLAR MEXICO SA  DE CV', RFC_FACT: 'ISM1010187F2', TOT_INGRS: 7432.65, EDO_CUEN: '4'},
      {NUM_REFE: 'REF18000010', NUM_SERIE: 'A', FOL_FACT: 2409, FEC_FACT: '15/11/2018 11:40:44 a. m.', FACT_UUID: '12BA786C-376F-47B8-ADD3-88E8C8C043D0', FEC_TIMB: '15/11/2018 11:40:47 a. m.', RAZ_FACT: 'INTELIGENCIA SOLAR MEXICO SA  DE CV', RFC_FACT: 'ISM1010187F2', TOT_INGRS: 7432.65, EDO_CUEN: '6'},
      {NUM_REFE: 'REF18000011', NUM_SERIE: 'A', FOL_FACT: 2410, FEC_FACT: '15/11/2018 11:40:44 a. m.', FACT_UUID: '12BA786C-376F-47B8-ADD3-88E8C8C043D0', FEC_TIMB: '15/11/2018 11:40:47 a. m.', RAZ_FACT: 'INTELIGENCIA SOLAR MEXICO SA  DE CV', RFC_FACT: 'ISM1010187F2', TOT_INGRS: 7432.65, EDO_CUEN: '4'},
      {NUM_REFE: 'REF18000012', NUM_SERIE: 'A', FOL_FACT: 2411, FEC_FACT: '15/11/2018 11:40:44 a. m.', FACT_UUID: '12BA786C-376F-47B8-ADD3-88E8C8C043D0', FEC_TIMB: '15/11/2018 11:40:47 a. m.', RAZ_FACT: 'INTELIGENCIA SOLAR MEXICO SA  DE CV', RFC_FACT: 'ISM1010187F2', TOT_INGRS: 7432.65, EDO_CUEN: '6'},
      {NUM_REFE: 'REF18000013', NUM_SERIE: 'A', FOL_FACT: 2412, FEC_FACT: '15/11/2018 11:40:44 a. m.', FACT_UUID: '12BA786C-376F-47B8-ADD3-88E8C8C043D0', FEC_TIMB: '15/11/2018 11:40:47 a. m.', RAZ_FACT: 'INTELIGENCIA SOLAR MEXICO SA  DE CV', RFC_FACT: 'ISM1010187F2', TOT_INGRS: 7432.65, EDO_CUEN: '4'},
      {NUM_REFE: 'REF18000014', NUM_SERIE: 'A', FOL_FACT: 2413, FEC_FACT: '15/11/2018 11:40:44 a. m.', FACT_UUID: '12BA786C-376F-47B8-ADD3-88E8C8C043D0', FEC_TIMB: '15/11/2018 11:40:47 a. m.', RAZ_FACT: 'INTELIGENCIA SOLAR MEXICO SA  DE CV', RFC_FACT: 'ISM1010187F2', TOT_INGRS: 7432.65, EDO_CUEN: '7'},
      {NUM_REFE: 'REF18000015', NUM_SERIE: 'A', FOL_FACT: 2414, FEC_FACT: '15/11/2018 11:40:44 a. m.', FACT_UUID: '12BA786C-376F-47B8-ADD3-88E8C8C043D0', FEC_TIMB: '15/11/2018 11:40:47 a. m.', RAZ_FACT: 'INTELIGENCIA SOLAR MEXICO SA  DE CV', RFC_FACT: 'ISM1010187F2', TOT_INGRS: 7432.65, EDO_CUEN: '4'},
      {NUM_REFE: 'REF18000016', NUM_SERIE: 'A', FOL_FACT: 2415, FEC_FACT: '15/11/2018 11:40:44 a. m.', FACT_UUID: '12BA786C-376F-47B8-ADD3-88E8C8C043D0', FEC_TIMB: '15/11/2018 11:40:47 a. m.', RAZ_FACT: 'INTELIGENCIA SOLAR MEXICO SA  DE CV', RFC_FACT: 'ISM1010187F2', TOT_INGRS: 7432.65, EDO_CUEN: '4'},
      {NUM_REFE: 'REF18000017', NUM_SERIE: 'A', FOL_FACT: 2416, FEC_FACT: '15/11/2018 11:40:44 a. m.', FACT_UUID: '12BA786C-376F-47B8-ADD3-88E8C8C043D0', FEC_TIMB: '15/11/2018 11:40:47 a. m.', RAZ_FACT: 'INTELIGENCIA SOLAR MEXICO SA  DE CV', RFC_FACT: 'ISM1010187F2', TOT_INGRS: 7432.65, EDO_CUEN: '7'},
      {NUM_REFE: 'REF18000018', NUM_SERIE: 'A', FOL_FACT: 2417, FEC_FACT: '15/11/2018 11:40:44 a. m.', FACT_UUID: '12BA786C-376F-47B8-ADD3-88E8C8C043D0', FEC_TIMB: '15/11/2018 11:40:47 a. m.', RAZ_FACT: 'INTELIGENCIA SOLAR MEXICO SA  DE CV', RFC_FACT: 'ISM1010187F2', TOT_INGRS: 7432.65, EDO_CUEN: '4'},
      {NUM_REFE: 'REF18000019', NUM_SERIE: 'A', FOL_FACT: 2418, FEC_FACT: '15/11/2018 11:40:44 a. m.', FACT_UUID: '12BA786C-376F-47B8-ADD3-88E8C8C043D0', FEC_TIMB: '15/11/2018 11:40:47 a. m.', RAZ_FACT: 'INTELIGENCIA SOLAR MEXICO SA  DE CV', RFC_FACT: 'ISM1010187F2', TOT_INGRS: 7432.65, EDO_CUEN: '4'},
      {NUM_REFE: 'REF18000020', NUM_SERIE: 'A', FOL_FACT: 2420, FEC_FACT: '15/11/2018 11:40:44 a. m.', FACT_UUID: '12BA786C-376F-47B8-ADD3-88E8C8C043D0', FEC_TIMB: '15/11/2018 11:40:47 a. m.', RAZ_FACT: 'INTELIGENCIA SOLAR MEXICO SA  DE CV', RFC_FACT: 'ISM1010187F2', TOT_INGRS: 7432.65, EDO_CUEN: '8'},
      {NUM_REFE: 'REF18000021', NUM_SERIE: 'A', FOL_FACT: 2421, FEC_FACT: '15/11/2018 11:40:44 a. m.', FACT_UUID: '12BA786C-376F-47B8-ADD3-88E8C8C043D0', FEC_TIMB: '15/11/2018 11:40:47 a. m.', RAZ_FACT: 'INTELIGENCIA SOLAR MEXICO SA  DE CV', RFC_FACT: 'ISM1010187F2', TOT_INGRS: 7432.65, EDO_CUEN: '8'}
    ];
    this.nfacts = this.facts;
    // 
    this.facturas = this.facts.length;
    this.cobradas = this.facts.filter(data => data.EDO_CUEN === '4').length;
    this.porcobra = this.facts.filter(data => data.EDO_CUEN === '6' || data.EDO_CUEN === '8').length;
    this.cancelas = this.facts.filter(data => data.EDO_CUEN === '7').length;
    // 
    this.pcobradas = ( this.cobradas * 100 ) / this.facturas + '%';
    this.pporcobra = ( this.porcobra * 100 ) / this.facturas + '%';
    this.pcancelas = ( this.cancelas * 100 ) / this.facturas + '%';

    // para la grafica de lineas
    this.lineChartData = [
      {data: [2, 3, 2, 1, 2, 0, 0, 3, 4, 2, 2, 1, 0, 0, 3, 2, 2, 4, 5, 0, 0, 2, 1, 2, 5, 4, 0, 0, 2, 3, 4], label: 'Facturas'}
    ];
    this.lineChartLabels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];

    this.lineChartColors = [
      { // grey
        backgroundColor: 'rgba(255, 255, 255, 0)',
        borderColor: 'rgba(128, 135, 241, 1)',
      }
    ];
    this.lineChartLegend = false;

    // la grafica de barras
    this.barChartLabels = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    this.barChartLegend = false;
    this.barChartData = [
      {data: [65, 59, 80, 81, 56, 55, 40, 59, 80, 81, 61, 0], label: 'Facturas'},
      {data: [28, 48, 40, 19, 86, 27, 90, 48, 40, 19, 3, 0], label: 'Canceladas'}
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
  }

  ngOnInit() {
  }

  onChangeFilter(event) {
    // console.log(event);
    if (event === '0') {
      this.facts = this.nfacts;
    } else {
      this.facts = this.nfacts;
      switch (event) {
        case 'PEN':
          this.facts = this.facts.filter(data => data.EDO_CUEN === '4');
          break;
        case 'PAG':
          this.facts = this.facts.filter(data => data.EDO_CUEN === '6' || data.EDO_CUEN === '8');
          break;
        case 'CAN':
          this.facts = this.facts.filter(data => data.EDO_CUEN === '7');
          break;
      }      
    } 
  }

}
