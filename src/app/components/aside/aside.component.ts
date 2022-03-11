import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';


@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  constructor(
    private router: Router,
    public userServ: UserService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.userServ.logOut();
    this.router.navigate(['/login']);
  }

}
