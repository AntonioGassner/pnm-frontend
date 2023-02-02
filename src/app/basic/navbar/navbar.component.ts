import { Component, OnInit } from '@angular/core';
import {LoginComponent} from "../../login/login.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  log: boolean = true;


  constructor() { }

  ngOnInit(): void {

  }


  Logout() {
      console.log(this.log)
     this.log = false;
  }
}
