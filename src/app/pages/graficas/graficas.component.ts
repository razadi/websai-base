import { Component, OnInit } from '@angular/core';

declare function init_plugins_peity_min();
declare function init_plugins_peity_ini();

declare function init_plugins_easychart_min();
declare function init_plugins_easychart_ini();

declare function init_plugins_sparkchart_min();
declare function init_plugins_sparkchart_ini();

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnInit {


  constructor() { 

  }

  ngOnInit() {
    init_plugins_peity_min();
    init_plugins_peity_ini();

    init_plugins_easychart_min();
    init_plugins_easychart_ini();

    init_plugins_sparkchart_min();
    init_plugins_sparkchart_ini();
  }

  

}
