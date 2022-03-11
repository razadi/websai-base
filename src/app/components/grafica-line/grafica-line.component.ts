import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafica-line',
  templateUrl: './grafica-line.component.html',
  styleUrls: ['./grafica-line.component.css']
})
export class GraficaLineComponent implements OnInit {

  @Input() chartDataSet: any[];
  @Input() chartLabels: string[];
  @Input() chartOptions: any;
  @Input() chartColors: any[];
  @Input() chartLegend: boolean;
  chartType: string = 'line';

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
