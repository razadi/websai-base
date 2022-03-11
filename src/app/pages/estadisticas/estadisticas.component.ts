import { Component, OnInit } from '@angular/core';
import { GraphsService } from '../../services/graphs/graphs.service';

declare var Morris: any;

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {

  public barChartOptions: any = { 
    scaleShowVerticalLines: false,
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
  public duntChartElements: string[];
  public duntChartLabels1: string[] = [];
  public duntChartValues1: number[];
  public duntChartLabels2: string[] = [];
  public duntChartValues2: number[];
  public duntChartPercents: number[] = [];

  constructor(
    public graphsServ: GraphsService
  ) { }

  ngOnInit() {

    // la grafica de barras
    this.barChartLabels = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    this.barChartLegend = false;
    this.barChartData = this.graphsServ.barChartDataEsta1;
    this.barChartColors = [{
      backgroundColor: ['#F7464A', '#46BFBD'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1'],
      borderWidth: 2,
    }];

    // 
    
    this.duntChartElements = ['chartD1', 'chartD2', 'chartD3', 'chartD4', 'chartD5', 'chartD6', 'chartD7', 'chartD8', 'chartD9', 'chartD10', 'chartD11', 'chartD12'];
    let i: number = 0;
    this.graphsServ.monthLabelsShort.forEach((mes: string) => {
      this.duntChartLabels1[i] = mes + ' 2017';
      this.duntChartLabels2.push(mes + ' 2018');
      i++;
    });
    this.duntChartValues1 = [65, 59, 80, 81, 56, 55, 40, 59, 80, 81, 60, 20];
    this.duntChartValues2 = [28, 48, 40, 19, 86, 27, 90, 48, 40, 19, 5, 40];
    // recorro para poner los porcentajes de cambio
    for (let index = 0; index < 12; index++) {
      this.duntChartPercents.push( Math.round( ( (this.duntChartValues2[index] - this.duntChartValues1[index] ) / this.duntChartValues1[index] ) * 100 ) );   
    }
    // this.duntChartPercents = [-23, -24, 45, -53, -29, 30, 40, 23, -76, -98, 24, 44];

    for (let index = 0; index < 12; index++) {
      
      Morris.Donut({
        element: this.duntChartElements[index],
        data: [{
            label: this.duntChartLabels1[index],
            value: this.duntChartValues1[index]
          }, {
            label: this.duntChartLabels2[index],
            value: this.duntChartValues2[index]
          }],
          resize: true,
          colors: ['#abbdee', '#eed9ab']
      });  

    }

    // Morris.Donut({
    //   element: this.duntChartElements[0],
    //   data: [{
    //       label: this.duntChartLabels1[0],
    //       value: this.duntChartValues1[0]
    //     }, {
    //       label: this.duntChartLabels2[0],
    //       value: this.duntChartValues2[0]
    //     }],
    //     resize: true,
    //     colors: ['#abbdee', '#eed9ab']
    // }); 
    

  }

}
