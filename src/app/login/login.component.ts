import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user/user.service';

declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  arecover: boolean = false;

  constructor(
    private router: Router,
    private userServ: UserService
  ) { }

  ngOnInit() {
    init_plugins();
  }

  onSubmit(forma: NgForm ) {
    console.log(forma.valid, forma.value);  
    this.userServ.logIn();
    this.router.navigate(['/dashboard']);  
  }

  recuperaPass(forma: NgForm) {
    console.log(forma.valid, forma.value);  
    this.userServ.recoverPass(forma.value);
  }

  muestraRecover(valor: boolean) {
    this.arecover = valor;
  }

}
