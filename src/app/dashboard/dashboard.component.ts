import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  log: boolean = true;
  

  constructor() { }

  ngOnInit(): void {

  }

 edit(){
    if (this.log){
        this.log = false;
    }else {
        this.log = true;
    }

 }
}
