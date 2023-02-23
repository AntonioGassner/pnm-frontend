import {Component, OnInit, ViewChild} from '@angular/core';
import {
  AziendaDTO, AziendaRestAdapterService


} from "../../../libs/api/produttori-service/src/lib";
import {NgForm} from "@angular/forms";
import {map, Observable} from "rxjs";
import {Router} from "@angular/router";

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
      private service: AziendaRestAdapterService,
      private router: Router

  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let searchResult: Observable<AziendaDTO> = this.searchRemote(this.loginForm.value.email, this.loginForm.value.password);
    searchResult.subscribe(data => {
      if(data) {
        this.router.navigate(['/dashboard', data.id]);

      }
    });

  }

  searchRemote(user: string, pass: string):  Observable<AziendaDTO> {
    return this.service.validateLogin(user, pass).pipe(
        map((v) => v!)
    );
  }

}
