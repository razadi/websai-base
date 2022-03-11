import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafica-pie',
  templateUrl: './grafica-pie.component.html',
  styleUrls: ['./grafica-pie.component.css']
})
export class GraficaPieComponent implements OnInit {

  @Input() chartLabels: string[] = [];
  @Input() chartData: number[] = [];
  @Input() chartOptions: any;
  @Input() chartColors: any[] = [];
  chartType: string = 'pie';

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
