import { Component, OnInit } from '@angular/core';
import { GraphsService } from '../../services/graphs/graphs.service';

@Component({
  selector: 'app-graficafac',
  templateUrl: './graficafac.component.html',
  styleUrls: ['./graficafac.component.css']
})
export class GraficafacComponent implements OnInit {

  // para la grafica de lineas
  public lineChartData: any[]; 
  public lineChartLabels: string[];
  public lineChartOptions: any = {
    responsive: true,
    // scales: {
    //   xAxes: [{
    //     gridLines: {
    //       display: false
    //     }
    //   }],
    //   yAxes: [{
    //     gridLines: {
    //       display: true
    //     }
    //   }]
    // }
  };
  public lineChartColors: any[];
  public lineChartLegend: boolean;
  // grafica pie
  pieChartLabels1: string[] = [];
  pieChartData1: number[] = [];
  pieChartColors1: any[] = [];
  pieChartLabels2: string[] = [];
  pieChartData2: number[] = [];
  pieChartColors2: any[] = [];
  pieChartLabels3: string[] = [];
  pieChartData3: number[] = [];
  pieChartColors3: any[] = [];
  pieChartOptions: any = 
    {
      legend: {
         display: false
      },
      tooltips: {
         enabled: true
      },
      cutoutPercentage: 0
      // rotation: -0.1
      // circumference: 1
     };

  constructor(
    public graphsServ: GraphsService
  ) { 
    
  }

  ngOnInit() {
    // para la grafica de lineas
    this.lineChartData = this.graphsServ.lineChartDataFacturasA;
    this.lineChartLabels = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

    this.lineChartColors = [
      { // grey
        backgroundColor: 'rgba(255, 255, 255, 0)',
        borderColor: 'rgba(128, 135, 241, 1)',
      }
    ];
    this.lineChartLegend = false;

    // gráfica de pie
    this.pieChartLabels1 = ['Pagadas', 'Pendientes'];
    this.pieChartData1 = [this.graphsServ.dataGrafFacA[0].ppagadas, this.graphsServ.dataGrafFacA[0].pporpagar];
    this.pieChartColors1 = [{ backgroundColor: ['#0cf1e6', '#f1e20c']}];
    this.pieChartLabels2 = ['Normales', 'Canceladas'];
    this.pieChartData2 = [this.graphsServ.dataGrafFacA[1].pnormales, this.graphsServ.dataGrafFacA[1].pcanceladas];
    this.pieChartColors2 = [{ backgroundColor: ['#44acf1', '#da0000']}];
    this.pieChartLabels3 = ['Impor.', 'Expor.'];
    this.pieChartData3 = [this.graphsServ.dataGrafFacA[2].ppagadas, this.graphsServ.dataGrafFacA[2].pporpagar];
    this.pieChartColors3 = [{ backgroundColor: ['#398bf7', '#99abb4']}];
  }

}
