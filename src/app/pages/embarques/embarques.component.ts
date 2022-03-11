import { Component, OnInit } from '@angular/core';
import { RefeService } from '../../services/refe/refe.service';
import { Router, ActivatedRoute } from '@angular/router';

declare function init_plugins_tablas();
// declare function init_plugins_footable();

@Component({
  selector: 'app-embarques',
  templateUrl: './embarques.component.html',
  styleUrls: ['./embarques.component.css']
})
export class EmbarquesComponent implements OnInit {

  tipo: string;
  title: string;
  referencias: any[];
  refex: any[];
  public busqueda;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public refeServ: RefeService
  ) { }

  ngOnInit() {
    // init_plugins_tablas();
    // init_plugins_footable();

    // console.log(this.refeServ.refes);
    this.route.params.subscribe(params => {
      // console.log(params.tipo);
      this.tipo = params.tipo;

      if (this.tipo === 'ALL') {
        this.referencias = this.refeServ.refes;
        this.title = 'Todos los embarques de Noviembre 2018';
      } else if (this.tipo === 'IMP') {
        this.referencias = this.refeServ.refes.filter(data => data.OPERA === 'IMPO');
        this.title = 'Embarques de importación noviembre 2018';
      } else if (this.tipo === 'EXP') {
        this.referencias = this.refeServ.refes.filter(data => data.OPERA === 'EXPO');
        this.title = 'Embarques de exportación noviembre 2018';
      } else if (this.tipo === 'REC') {
        this.referencias = this.refeServ.refes.filter(data => data.TIPO === 'R');
        this.title = 'Embarques rectificados noviembre 2018';
      } else {
        this.referencias = this.refeServ.refes.filter(data => data.EDOR === this.tipo);
        if (this.tipo === 'PRO') {
          this.title = 'Embarques en proceso de despacho';
        } else if (this.tipo === 'TER') {
          this.title = 'Embarques despachados y facturados';
        } else if (this.tipo === 'RET') {
          this.title = 'Embarques con retraso en su despacho';
        }
        
      }
    });  
    
    this.refex = this.referencias;
  }

  onBuscar(termino: string) {
    // console.log(termino);
    this.referencias = [];

    if (termino === '') {
      this.referencias = this.refex;
    } else {
      this.referencias = this.refex.filter(data => {        
        return data.NUM_REFE.toUpperCase().includes(termino.toUpperCase()) ||
               data.NUM_PEDI.toUpperCase().includes(termino.toUpperCase()) ||
               data.ADU_DESP.toUpperCase().includes(termino.toUpperCase()) ||
               data.NOM_IMP.toUpperCase().includes(termino.toUpperCase()) ||
               data.FEC_PAGO.toUpperCase().includes(termino.toUpperCase()) ||
               data.EDOR.toUpperCase().includes(termino.toUpperCase()) ||
               data.OPERA.toUpperCase().includes(termino.toUpperCase());
      });
    }      
  }

}
