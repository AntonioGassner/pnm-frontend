import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {
    ProduttoreCreateDTO, ProduttoreDTO,
    ProduttoreRestAdapterService
} from "../../../libs/api/produttori-service/src/lib";
import {map, Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('rf') registerForm: NgForm;
    submitted = false;
    produttore: ProduttoreDTO = {
        id: '',
        nome: '',
        cognome: '',
        codiceFiscale: '',
        numeroPrivato: '',
        email: '',
        partitaIva: '',
    }
  constructor(
      private service: ProduttoreRestAdapterService

  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
      let output:Observable<ProduttoreDTO> = this.createRemote();
      output.subscribe(data => {
         data});
  }
  createRemote(): Observable<ProduttoreDTO>
    {
      let item: ProduttoreCreateDTO = {
        nome: this.registerForm?.value.produttore.nome,
        cognome: this.registerForm?.value.produttore.cognome,
        codiceFiscale: this.registerForm?.value.produttore.codiceFiscale,
        numeroPrivato: this.registerForm?.value.produttore.numeroPrivato,
        email: this.registerForm?.value.produttore.email,
        partitaIva: this.registerForm?.value.produttore.partitaIva
      };
      this.registerForm.reset();
      return this.service.createProduttore(item).pipe(
          map((v) => v!)
      );

      //     .subscribe(responseData =>{
      //     console.log(responseData.id)
      //
      //     this.produttore.id = responseData.id;
      //     this.produttore.nome = responseData.nome;
      //     this.produttore.cognome = responseData.cognome;
      //     this.produttore.codiceFiscale = responseData.codiceFiscale;
      //     this.produttore.numeroPrivato = responseData.numeroPrivato;
      //     this.produttore.email = responseData.email;
      //     this.produttore.partitaIva = responseData.partitaIva;
      // });
      // this.submitted = true;
      // console.log('submitted '+this.submitted)
  }
}
