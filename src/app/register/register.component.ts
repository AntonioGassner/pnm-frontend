import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  defaultQuestion = 'pet';
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(registerForm: NgForm){
    console.log(registerForm)
  }
}
