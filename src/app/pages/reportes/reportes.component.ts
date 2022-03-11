import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportService } from '../../services/reports/report.service';


// declare function init_plugin_datatable();
declare function init_plugins_datepicker();
declare function init_plugins_daterangepicker();
declare function init_plugins_date();

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  tipo: string;
  title: string;
  referencias: any[];
  refex: any[];
  public busqueda;


  constructor(
    private route: ActivatedRoute,
    public repoServ: ReportService
  ) { }

  ngOnInit() {
    // init_plugin_datatable();
    init_plugins_datepicker();
    init_plugins_daterangepicker();
    init_plugins_date();

    

    this.route.params.subscribe(params => {
      // console.log(params.tipo);
      this.tipo = params.tipo;
      let index: number = parseInt(this.tipo) - 1;
      this.title = this.repoServ.reportes[index].titule;
      this.referencias = [];
    });

    this.onChange('', this.tipo);
  }

  onChange(termino: string, tipo: string) {
    console.log(termino, tipo);
    switch (tipo) {
      case '1':
        this.referencias = this.repoServ.repUno;
        break;
      case '2':
        this.referencias = this.repoServ.repDos;
        break;
      case '3':
        this.referencias = this.repoServ.repTre;
        break;
      case '4':
        this.referencias = this.repoServ.repCua;
        break;
    }
    // console.log(this.referencias);
    
  }

  onClick() {
    console.log('Exporta aexcel');
    
  }

}
