import { Component, OnInit } from '@angular/core';
import { GraphsService } from '../../services/graphs/graphs.service';

@Component({
  selector: 'app-graficaemb',
  templateUrl: './graficaemb.component.html',
  styleUrls: ['./graficaemb.component.css']
})
export class GraficaembComponent implements OnInit {

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
  // 

  doughnutChartLabels1: string[] = [];
  doughnutChartData1: number[] = [];
  doughnutChartColors1: any[] = [];
  doughnutChartLabels2: string[] = [];
  doughnutChartData2: number[] = [];
  doughnutChartColors2: any[] = [];
  doughnutChartLabels3: string[] = [];
  doughnutChartData3: number[] = [];
  doughnutChartColors3: any[] = [];
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

  constructor(
    public graphsServ: GraphsService
  ) { 

  }

  ngOnInit() {
    // console.log(this.graphsServ.dataGrafEmbA[0]);

    // la grafica de barras
    this.barChartLabels = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    this.barChartLegend = false;
    this.barChartData = this.graphsServ.barChartDataA;
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

    // gráfica de donas
    this.doughnutChartLabels1 = ['Impor.', 'Expor.'];
    this.doughnutChartData1 = [this.graphsServ.dataGrafEmbA[0].impos, this.graphsServ.dataGrafEmbA[0].expos];
    this.doughnutChartColors1 = [{ backgroundColor: ['#398bf7', '#99abb4']}];

    this.doughnutChartLabels2 = ['AICM.', 'TOL.', 'MZN.'];
    this.doughnutChartData2 = [this.graphsServ.dataGrafEmbA[1].paicm, this.graphsServ.dataGrafEmbA[1].ptol, this.graphsServ.dataGrafEmbA[1].pmzn];
    this.doughnutChartColors2 = [{ backgroundColor: ['#745af2', '#99abb4', '#ef5350']}];

    this.doughnutChartLabels3 = ['Normales.', 'Rectificaciones'];
    this.doughnutChartData3 = [this.graphsServ.dataGrafEmbA[2].norma, this.graphsServ.dataGrafEmbA[2].recti];
    this.doughnutChartColors3 = [{ backgroundColor: ['#398bf7', '#ef5350']}];
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }
  
  public chartHovered(e: any): void {
    console.log(e);
  }

}
