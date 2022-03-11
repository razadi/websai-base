import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafica-bar',
  templateUrl: './grafica-bar.component.html',
  styleUrls: ['./grafica-bar.component.css']
})
export class GraficaBarComponent implements OnInit {

  @Input() chartData: any[] = [];
  @Input() chartLabels: string[] = [];
  @Input() chartOptions: any; 
  @Input() chartLegend: boolean;
  @Input() chartColors: any[] = [];
  chartType: string = 'bar';

  constructor() { }

  ngOnInit() {
  }

  public chartClicked(e: any): void {
    console.log(e);
  }
 
  public chartHovered(e: any): void {
    console.log(e);
  }

}
