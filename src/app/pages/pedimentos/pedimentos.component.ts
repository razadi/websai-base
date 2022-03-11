import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../../services/shared/shared.service';
import { RefeService } from '../../services/refe/refe.service';

@Component({
  selector: 'app-pedimentos',
  templateUrl: './pedimentos.component.html',
  styleUrls: ['./pedimentos.component.css']
})
export class PedimentosComponent implements OnInit {

  referencia: string;
  ref: any;

  constructor(
    private route: ActivatedRoute,
    private sharedServ: SharedService,
    private refeServ: RefeService
  ) { 
    this.referencia = this.route.snapshot.params['refe'];

    let index = this.sharedServ.findIndexByKeyValueStr(this.refeServ.refes, 'NUM_REFE', this.referencia);
    this.ref = this.refeServ.refes[index];
    console.log(this.ref);
    
  }

  ngOnInit() {
  }

}
