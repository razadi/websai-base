import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usuario: string;
  usumail: string;
  usutele: string;
  usudire: string;
  usursfb: string;
  usurstw: string;
  usursgo: string;


  constructor() { 
    this.usuario = 'Nombre del suario';
    this.usumail = 'rzamudio@efectisoft.com';
    this.usutele = '+52 1 554 990 2424';
    this.usudire = '15620 Ciudad de México, CDMX';
    this.usursfb = 'https://www.facebook.com/Efectisoft-114794405249077/';
    this.usurstw = 'https://twitter.com/razadi';
    this.usursgo = 'https://plus.google.com/u/0/+RaulZD';
  }

  logIn() {
    // proceo para login en casa
  }

  logOut() {
    // desconecta todo
  }

  recoverPass(mail: string) {
    // recupera el pass con el correo y lo manda a su correo
  }

}
