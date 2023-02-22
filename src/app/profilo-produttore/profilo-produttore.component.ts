import {Component, OnInit} from '@angular/core';
import {AziendaDTO} from "../../../libs/api/produttori-service/src/lib";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-profilo-produttore',
  templateUrl: './profilo-produttore.component.html',
  styleUrls: ['./profilo-produttore.component.css']
})
export class ProfiloProduttoreComponent implements OnInit{
  log: boolean = false;
  produttore: AziendaDTO;

  constructor(
      private route:ActivatedRoute,
      private router: Router
  ) { }

  ngOnInit(): void {
    this.getProduttore();
  }

  getProduttore() {
    let index: number = 5;

    let n: number = this.route.snapshot.params['n'];
    console.log(n)
    if(this.produttore){
      console.log(this.produttore.id)
    } else {
      console.log('no produttore')
    }
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
