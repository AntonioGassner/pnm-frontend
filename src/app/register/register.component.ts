import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {
    ProduttoreCreateDTO,
    ProduttoreCriteria,
    ProduttoreRestAdapterService
} from "../../../libs/api/produttori-service/src/lib";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('rf') registerForm: NgForm;
    item: ProduttoreCreateDTO = {
        nome: '',
        cognome: '',
        codiceFiscale: '',
        numeroPrivato: '',
        email: '',
        partitaIva: ''
    }
    submitted = false;
  constructor(
      private service: ProduttoreRestAdapterService

  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
      // const item: ProduttoreCreateDTO = {
      //   nome: '',
      //   cognome: '',
      //   codiceFiscale: '',
      //   numeroPrivato: '',
      //   email: '',
      //   partitaIva: ''
      // }
      this.submitted = true;
      this.item.nome = this.registerForm.value.produttore.nome;
      this.item.cognome = this.registerForm.value.produttore.cognome;
      this.item.codiceFiscale = this.registerForm.value.produttore.codiceFiscale;
      this.item.numeroPrivato = this.registerForm.value.produttore.numeroPrivato;
      this.item.email = this.registerForm.value.produttore.email;
      this.item.partitaIva = this.registerForm.value.produttore.partitaIva;

      console.log(this.registerForm)
      this.registerForm.reset();


      // this.service.deleteProduttore('').subscribe(responseData =>{
      //     console.log(responseData);
      // });
      this.service.createProduttore(this.item).subscribe(responseData =>{
          console.log(responseData);
      });

  }
}
