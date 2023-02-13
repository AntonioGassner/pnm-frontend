import { Component, OnInit } from '@angular/core';
import {LoginComponent} from "../../login/login.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  log: boolean


  constructor() { }

  ngOnInit(): void {

  }


  Logout() {
    if (this.log){
      this.log = false;
    }else {
      this.log = true;
    }

  }
}
