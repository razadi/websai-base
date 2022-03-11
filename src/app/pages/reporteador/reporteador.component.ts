import { Component, OnInit } from '@angular/core';
import { ReporterService } from '../../services/reports/reporter.service';

@Component({
  selector: 'app-reporteador',
  templateUrl: './reporteador.component.html',
  styleUrls: ['./reporteador.component.css']
})
export class ReporteadorComponent implements OnInit {

  repos: any[];
  reposn: any[];
  numope: number;
  numfin: number;
  numind: number;

  constructor(
    public reporterServ: ReporterService
  ) { 
    this.repos = this.reporterServ.reportes;
    this.reposn = this.repos.filter(data => data.type === 'O');
    this.numope = this.reposn.length;
    // this.reposn = this.repos.filter(data => data.type === 'F');
    // this.numfin = this.reposn.length;
    // this.reposn = this.repos.filter(data => data.type === 'I');
    // this.numind = this.reposn.length;
    // this.reposn = this.repos;
    this.repos = this.reposn;
  }

  ngOnInit() {
  }

  onChangeFilter(event) {
    // console.log(event);
    if (event === 'T') {
      this.repos = this.reposn;
    } else {
      this.repos = this.reposn;
      this.repos = this.repos.filter(data => data.type === event);
    }    
  }

}