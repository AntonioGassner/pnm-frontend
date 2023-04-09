import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {
    AziendaCreateDTO, AziendaDTO,
    AziendaRestAdapterService
} from "../../../libs/api/produttori-service/src/lib";
import {map, Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    @ViewChild('rf') registerForm: NgForm;
    submitted = false;
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
    ) {
    }

    ngOnInit(): void {
        this.test();
    }

    test() {
        let output: Observable<AziendaDTO> = this.createRemote();
        output.subscribe(data => {
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
            console.log('data')
            console.log(data.id)

        });
        console.log('produttore')
        console.log(this.produttore.id)
        if (this.produttore.id) {
            this.router.navigate(['/login']);

        }
    }

    onSubmit() {
        let output: Observable<AziendaDTO> = this.createRemote();
        output.subscribe(data => {
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
            console.log('data')
            console.log(data.id)

        });
        console.log('produttore')
        console.log(this.produttore.id)
        if (this.produttore.id) {
            this.router.navigate(['/login']);

        }
    }

    createRemote(): Observable<AziendaDTO> {
        switch (this.registerForm.value.produttore.provincia) {
            case "Ancona": {
                this.registerForm.value.produttore.provincia = 'AN';
                break;
            }
            case "Ascoli Piceno": {
                this.registerForm.value.produttore.provincia = 'AP';
                break;
            }
            case "Fermo": {
                this.registerForm.value.produttore.provincia = 'FM';
                break;
            }
            case "Macerata": {
                this.registerForm.value.produttore.provincia = 'MC';
                break;
            }
            case "Pesaro e Urbino": {
                this.registerForm.value.produttore.provincia = 'PU';
                break;
            }
            default: {
                break;
            }
        }

        let item: AziendaCreateDTO = {
            nomeProduttore: this.registerForm?.value.produttore.nomeProduttore,
            cognomeProduttore: this.registerForm?.value.produttore.cognomeProduttore,
            partitaIva: this.registerForm?.value.produttore.partitaIva,
            numeroPrivato: this.registerForm?.value.produttore.numeroPrivato,
            emailPrivata: this.registerForm?.value.produttore.emailPrivata,
            codiceFiscale: this.registerForm?.value.produttore.codiceFiscale,
            nomeAzienda: this.registerForm?.value.produttore.nomeAzienda,
            ragioneSociale: this.registerForm?.value.produttore.ragioneSociale,
            numeroAzienda: this.registerForm?.value.produttore.numeroAzienda,
            emailAzienda: this.registerForm?.value.produttore.emailAzienda,
            comune: this.registerForm?.value.produttore.comune,
            provincia: this.registerForm?.value.produttore.provincia,
            indirizzo: this.registerForm?.value.produttore.indirizzo,
            cap: this.registerForm?.value.produttore.cap,
            password: this.registerForm?.value.produttore.password,
        };
        this.submitted = true;
        this.registerForm.reset();
        return this.service.createAzienda(item).pipe(
            map((v) => v!)
        );
    }
}