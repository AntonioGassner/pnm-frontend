import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-profilo-produttore',
  templateUrl: './profilo-produttore.component.html',
  styleUrls: ['./profilo-produttore.component.css']
})
export class ProfiloProduttoreComponent implements OnInit{
  log: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  edit(){
    if(this.log){
      this.log = false
    }
    else{
      this.log = true;
    }
  }
}
