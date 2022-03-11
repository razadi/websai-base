import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RefeService } from '../../services/refe/refe.service';

// declare function init_plugins_magnific_popup();
// declare function init_plugins_magnific_ini();

@Component({
  selector: 'app-previos',
  templateUrl: './previos.component.html',
  styleUrls: ['./previos.component.css']
})
export class PreviosComponent implements OnInit {

  referencia: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public refeServ: RefeService
  ) { 
    this.route.params.subscribe(params => {
      this.referencia = params.refe;
    });
  }

  ngOnInit() {
    // init_plugins_magnific_popup();
    // init_plugins_magnific_ini();
  }

}
