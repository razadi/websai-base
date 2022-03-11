import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RefeService } from '../../services/refe/refe.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  termino: string;

  constructor(
    private route: ActivatedRoute,
    public refeServ: RefeService
  ) { }

  ngOnInit() {
    // recupero el parametro
    this.route.params.subscribe(params => {
      // console.log(params);
      this.termino = params.valor;
      // 
      this.refeServ.getRefesBuscar(this.termino);
    });
  }

}
