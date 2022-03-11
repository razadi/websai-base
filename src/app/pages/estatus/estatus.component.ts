import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RefeService } from '../../services/refe/refe.service';

@Component({
  selector: 'app-estatus',
  templateUrl: './estatus.component.html',
  styleUrls: ['./estatus.component.css']
})
export class EstatusComponent implements OnInit {

  referencia: string;
  pedimento: string;
  fechaentr: string;
  operacion: string;

  constructor(
    private route: ActivatedRoute,
    public refeServ: RefeService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.referencia = params.refe;
    });
    // ahora traigo al info de la referencia
    this.refeServ.getEstatusRefe(this.referencia);
    // va el suscribe y lleno los datos siguientes:
    this.pedimento = '1847 9999 9010091';
    this.fechaentr = '02/Oct/2018';
    this.operacion = 'IMPORTACION';
  }

}
