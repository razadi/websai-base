import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  usuDesc: string;
  timeline: any[];
  
  constructor(

    public userServ: UserService
  ) { 
    this.timeline = [
      {activo: true, from: 'noviembre 12, 2018 a las 12:43:22', to: 'actual', actividad: 'Revisó el reporte tal...'},
      {activo: false, from: 'noviembre 11, 2018 a las 12:43:22', to: 'noviembre 11, 2018 a las 15:13:10', actividad: 'Revisó el reporte tal...'}      ,
      {activo: false, from: 'noviembre 10, 2018 a las 12:43:22', to: 'noviembre 10, 2018 a las 15:13:10', actividad: 'Revisó el reporte tal...'},
      {activo: false, from: 'noviembre 07, 2018 a las 12:43:22', to: 'noviembre 09, 2018 a las 15:13:10', actividad: 'Revisó el reporte tal...'},
      {activo: false, from: 'noviembre 06, 2018 a las 12:43:22', to: 'noviembre 06, 2018 a las 15:13:10', actividad: 'Revisó el reporte tal...'},
      {activo: false, from: 'noviembre 03, 2018 a las 12:43:22', to: 'noviembre 05, 2018 a las 15:13:10', actividad: 'Revisó el reporte tal...'},
      {activo: false, from: 'noviembre 02, 2018 a las 12:43:22', to: 'noviembre 02, 2018 a las 15:13:10', actividad: 'Revisó el reporte tal...'},
      {activo: false, from: 'noviembre 01, 2018 a las 12:43:22', to: 'noviembre 01, 2018 a las 15:13:10', actividad: 'Revisó el reporte tal...'},
      {activo: false, from: 'octubre 29, 2018 a las 12:43:22', to: 'octubre 31, 2018 a las 15:13:10', actividad: 'Revisó el reporte tal...'}
    ];
  }

  ngOnInit() {
    this.usuDesc = 'Descripción del usuario, si se requiere...';
  }

  irRedSocial(red: string) {
    if (red === 'fb') {
      // window.location.href = this.userServ.usursfb;
      window.open(this.userServ.usursfb);
    } else if (red === 'tw') {
      window.open(this.userServ.usurstw);
    } else if (red === 'go') {
      window.open(this.userServ.usursgo);
    }
  }

}
