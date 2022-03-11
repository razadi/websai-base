import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styleUrls: ['./grafica-dona.component.css']
})
export class GraficaDonaComponent implements OnInit {

  @Input() chartLabels: string[] = [];
  @Input() chartData: number[] = [];
  @Input() chartOptions: any;
  @Input() chartColors: any[] = [];
  chartType: string = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

  public chartClicked(e: any): void {
    console.log('click', e);
  }
 
  public chartHovered(e: any): void {
    console.log('hover', e);
  }
}
