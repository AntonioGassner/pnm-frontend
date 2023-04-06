import { Component, OnInit } from '@angular/core';
import {LoginComponent, } from "../../login/login.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  log: boolean


  constructor(private login : LoginComponent) { }

  ngOnInit(): void {
     this.log =  this.login.loginSuccesful;
  }


  Logout() {
    this.log = false;
  }
}
