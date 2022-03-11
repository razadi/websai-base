import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RefeService } from '../../services/refe/refe.service';

declare function init_plugins_horizontal_time_line();

@Component({
  selector: 'app-referencia',
  templateUrl: './referencia.component.html',
  styleUrls: ['./referencia.component.css']
})
export class ReferenciaComponent implements OnInit {

  referencia: string;
  pedimento: string;
  fechaentr: string;
  operacion: string;

  facturas: any[];
  partidas: any[];
  etapas: any[];

  constructor(
    private route: ActivatedRoute,
    public refeServ: RefeService
  ) { }

  ngOnInit() {
    // init_plugins_horizontal_time_line();

    this.route.params.subscribe(params => {
      this.referencia = params.refe;
    });
    // ahora traigo al info de la referencia
    this.refeServ.getEstatusRefe(this.referencia);
    // va el suscribe y lleno los datos siguientes:
    this.pedimento = '1847 9999 9010091';
    this.fechaentr = '02/Oct/2018';
    this.operacion = 'IMPORTACION';
    this.facturas = [{
      cons: 1,
      numero: 'LD20180925',
      fecha: '28/Oct/2018',
      prove: 'MUNDIALISTA INTERNATIONAL CO LIMITED',
      icoter: 'CIF',
      moneda: 'USD',
      valext: 30485.05,
      valdll: 30485.05,
      tipcam: 1.0
    }];
    this.partidas = [{
        parti: 1,
        fracc: '84733002',
        vincu: '0',
        valor: '1',
        paiori: 'USA',
        paiven: 'USA',
        unidad: '6',
        cantid: 1,
        unitar: '6',
        cantar: 1,
        descrip: 'MAQUINA DISPENSADORA ( GAME BY GAME MACHINE )',
        valadua: 3993.5,
        unitario: 3993.5,
        tlc: 0,
        comp: 0
      }, {
        parti: 2,
        fracc: '85182999',
        vincu: '0',
        valor: '1',
        paiori: 'USA',
        paiven: 'USA',
        unidad: '6',
        cantid: 100,
        unitar: '1',
        cantar: 4.5,
        descrip: 'CABLES DE CONEXION UNIVERSAL',
        valadua: 933,
        unitario: 9.33,
        tlc: 0,
        comp: 0
      }, {
        parti: 3,
        fracc: '95043001',
        vincu: '0',
        valor: '1',
        paiori: 'USA',
        paiven: 'USA',
        unidad: '6',
        cantid: 3600,
        unitar: '1',
        cantar: 1310,
        descrip: 'PARTES Y ACCESORIOS: PARA MAQUINA DISPENSADORA DE COSAS',
        valadua: 62526.00,
        unitario: 17.37,
        tlc: 0,
        comp: 0
      }, {
        parti: 4,
        fracc: '39219099',
        vincu: '0',
        valor: '1',
        paiori: 'USA',
        paiven: 'USA',
        unidad: '6',
        cantid: 10,
        unitar: '1',
        cantar: 9.5,
        descrip: 'CIRCUITOS MODULARES (PS)',
        valadua: 100,
        unitario: 10,
        tlc: 0,
        comp: 0
      }, {
        parti: 5,
        fracc: '95043099',
        vincu: '0',
        valor: '1',
        paiori: 'USA',
        paiven: 'USA',
        unidad: '6',
        cantid: 200,
        unitar: '1',
        cantar: 18,
        descrip: 'PARTES Y ACCESORIOS BOTONES DE PLASTICO ( BUTTOM )',
        valadua: 1397.00,
        unitario: 6.99,
        tlc: 0,
        comp: 0
      }];
    this.etapas = [
      {item: 1, activo: 'S', etapa: 'REGISTRO DE EMBARQUE (ASIGNACION DE REFERENCIA )', fecha: '25/10/2018', hora: '14:43:52', registro: 'ROGELIO'},
      {item: 2, activo: 'N', etapa: 'PROFORMA PEDIMENTO', fecha: '05/11/2018', hora: '17:43:48', registro: 'ROBERTO'},
      {item: 3, activo: 'N', etapa: 'SOLICITUD DE ANTICIPOS', fecha: '05/11/2018', hora: '19:14:3', registro: 'ROBERTO'},
      {item: 4, activo: 'N', etapa: 'ENTRADA AL PAIS', fecha: '07/11/2018', hora: '12:0:0', registro: 'ROGELIO'},
      {item: 5, activo: 'N', etapa: 'RECEPCION DE ANTICIPOS', fecha: '09/11/2018', hora: '10:50:56', registro: 'ANAI'},
      {item: 6, activo: 'N', etapa: 'REGISTRO DE E-DOCUMENT', fecha: '14/11/2018', hora: '13:46:50', registro: 'ROBERTO'},
      {item: 7, activo: 'N', etapa: 'REGISTRO DE COVE', fecha: '14/11/2018', hora: '17:38:1', registro: 'ANAI'},
      {item: 8, activo: 'N', etapa: 'PEDIMENTO ELABORADO (VALIDACION)', fecha: '14/11/2018', hora: '17:49:31', registro: 'ANAI'},
      {item: 9, activo: 'N', etapa: 'PEDIMENTO PAGO (ELECTRONICO)', fecha: '14/11/2018', hora: '17:52:35', registro: 'ROBERTO'},
      {item: 10, activo: 'N', etapa: 'ORDEN DE PAGO', fecha: '15/11/2018', hora: '8:32:45', registro: 'ANAI'}
    ];
  }

}
