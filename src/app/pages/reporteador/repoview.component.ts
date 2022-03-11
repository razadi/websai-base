import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportService } from '../../services/reports/report.service';
import { SharedService } from '../../services/shared/shared.service';

declare function init_plugins_datepicker();
declare function init_plugins_daterangepicker();
declare function init_plugins_date();

@Component({
  selector: 'app-repoview',
  templateUrl: './repoview.component.html',
  styleUrls: ['./repoview.component.css']
})
export class RepoviewComponent implements OnInit {

  idRep: string;
  title: string;
  referencias: any[];
  refex: any[];
  public busqueda;
  reportes: any[] = [
                      {name: 'Reporte General', descrip: 'Repoprte que muestra los datos generales de las operaciones'},		
                      {name: 'Operaciones por aduana', descrip: 'Reporte de operacions agrupadas por aduana'},		
                      {name: 'Rectificaciones', descrip: 'Reporte de operaciones rectificadas'},		
                      {name: 'Tipos de operaciones', descrip: 'Reporte de las operaciones agrupadas por su tipo'}
                    ];


  constructor(
    private route: ActivatedRoute,
    public repoServ: ReportService,
    private sharedServ: SharedService
  ) { }

  ngOnInit() {
    // init_plugin_datatable();
    init_plugins_datepicker();
    init_plugins_daterangepicker();
    init_plugins_date();

    

    this.route.params.subscribe(params => {
      // console.log(params.idRep);
      this.idRep = params.id;
      let index: number = parseInt(this.idRep) - 1;
      this.title = this.repoServ.reportes[index].titule;
      this.referencias = [];
      this.title = this.reportes[index].name;
    });

    this.onChange('', this.idRep);
  }

  onChange(termino: string, idRep: string) {
    console.log(termino, idRep);
    
    switch (idRep) {
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
    this.sharedServ.setToast('Exportar a Excel', 'Permite mandar el reporte a Excel');
    
  }



}
