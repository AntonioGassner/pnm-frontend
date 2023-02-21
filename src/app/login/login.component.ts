import {Component, OnInit, ViewChild} from '@angular/core';
import {
  AziendaDTO, AziendaRestAdapterService


} from "../../../libs/api/produttori-service/src/lib";
import {NgForm} from "@angular/forms";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('lf') loginForm: NgForm;
  loginSuccesful: boolean = false;

  produttore: AziendaDTO = {
    id: '',
    nomeProduttore: '',
    cognomeProduttore: '',
    partitaIva: '',
    numeroPrivato: '',
    emailPrivata: '',
    codiceFiscale: '',
    nomeAzienda: '',
    ragioneSociale: '',
    numeroAzienda: '',
    emailAzienda: '',
    comune: '',
    provincia: '',
    indirizzo: '',
    cap: '',
    password: '',
  }


  constructor(
      private service: AziendaRestAdapterService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('onsubmit')
    console.log( this.loginForm.value.email)
    console.log(    this.loginForm.value.password)
    let searchResult: Observable<AziendaDTO> = this.searchRemote(this.loginForm.value.email, this.loginForm.value.password);

    console.log(this.loginForm.value.password)
    searchResult.subscribe(data => {
      if(data.id !== undefined) {
        this.produttore.id = data.id;
        this.produttore.nomeProduttore = data.nomeProduttore;
        this.produttore.cognomeProduttore = data.cognomeProduttore;
        this.produttore.partitaIva = data.partitaIva;
        this.produttore.numeroPrivato = data.numeroPrivato;
        this.produttore.emailPrivata = data.emailPrivata;
        this.produttore.codiceFiscale = data.codiceFiscale;
        this.produttore.nomeAzienda = data.nomeAzienda;
        this.produttore.ragioneSociale = data.ragioneSociale;
        this.produttore.numeroAzienda = data.numeroAzienda;
        this.produttore.emailAzienda = data.emailAzienda;
        this.produttore.comune = data.comune;
        this.produttore.provincia = data.provincia;
        this.produttore.indirizzo = data.indirizzo;
        this.produttore.cap = data.cap;
        this.produttore.password = data.password;
      }
    });
  }

  searchRemote(user: string, pass: string):  Observable<AziendaDTO> {
   console.log( this.loginForm.value.email)
    console.log(    this.loginForm.value.password)
    console.log( user)
    console.log( pass)


    return this.service.validateLogin(user, pass).pipe(
        map((v) => v!)
    );
  }

}
