import { Component, OnInit } from '@angular/core';

declare function init_plugins();
// declare function init_plugins_magnific_popup();
// declare function init_plugins_magnific_ini();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
    // init_plugins_magnific_popup();
    // init_plugins_magnific_ini();
  }

}
