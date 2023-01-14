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
    submitted = false;
  constructor(
      private service: ProduttoreRestAdapterService

  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
      let item: ProduttoreCreateDTO = {
        nome: this.registerForm.value.produttore.nome,
        cognome: this.registerForm.value.produttore.cognome,
        codiceFiscale: '',
        numeroPrivato: '',
        email: '',
        partitaIva: ''
      };
      this.submitted = true;
      item.nome = this.registerForm.value.produttore.nome;
      item.cognome = this.registerForm.value.produttore.cognome;
      item.codiceFiscale = this.registerForm.value.produttore.codiceFiscale;
      item.numeroPrivato = this.registerForm.value.produttore.numeroPrivato;
      item.email = this.registerForm.value.produttore.email;
      item.partitaIva = this.registerForm.value.produttore.partitaIva;
      this.registerForm.reset();
      this.service.createProduttore(item).subscribe(responseData =>{
          console.log(responseData);
      });
  }
}
