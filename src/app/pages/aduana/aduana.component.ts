import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RefeService } from '../../services/refe/refe.service';

@Component({
  selector: 'app-aduana',
  templateUrl: './aduana.component.html',
  styleUrls: ['./aduana.component.css']
})
export class AduanaComponent implements OnInit {

  aduana: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public refeServ: RefeService
  ) { 

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.aduana = params.adua;

      this.refeServ.getRefesAduana(this.aduana);
    });
  }

}
