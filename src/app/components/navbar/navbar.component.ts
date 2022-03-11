import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user/user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  anios: any[] = [];
  meses: any[] = [];
  aduas: any[] = [];
  // currentAdu: string;
  // currentMes: string;
  // currentAno: string;

  // inputBuscar = document.getElementById('hbuscar');
  
  // 
  public form: FormGroup;
  

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    public userServ: UserService
  ) { 
    
    this.anios = [
      {value: '2015', option: '2015'},
      {value: '2016', option: '2016'},
      {value: '2017', option: '2017'},
      {value: '2018', option: '2018'},
      {value: '2019', option: '2019'},
      {value: '2020', option: '2020'}
    ];

    this.meses = [
      {value: '7', option: 'JULIO'},
      {value: '8', option: 'AGOSTO'},
      {value: '9', option: 'SEPTIEMBRE'},
      {value: '10', option: 'OCTUBRE'},
      {value: '11', option: 'NOVIEMBRE'},
      {value: '12', option: 'DICIEMBRE'}
    ];

    this.aduas = [
      {value: '0', option: 'TODAS'},
      {value: '470', option: 'AICM'},
      {value: '650', option: 'TOLUCA'},
      {value: '430', option: 'VERACRUZ'}
    ];

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      cadu: '470',
      cmes: '11',
      cano: '2018'
    });
  }

  buscarRefe(termino: string) {
    // console.log(termino);
    
    this.router.navigate(['/buscar', termino]);
    
    // document.querySelector('srh-btn').click();
    let element: HTMLElement = document.getElementsByClassName('srh-btn')[0] as HTMLElement;
    element.click();
    
  }

}
