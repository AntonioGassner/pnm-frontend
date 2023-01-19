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
    ) {
    }

    ngOnInit(): void {
    }

    onSubmit() {
        let output: Observable<ProduttoreDTO> = this.createRemote();
        output.subscribe(data => {
            this.produttore.id = data.id;
            this.produttore.nome = data.nome;
            this.produttore.cognome = data.cognome;
            this.produttore.codiceFiscale = data.codiceFiscale;
            this.produttore.numeroPrivato = data.numeroPrivato;
            this.produttore.email = data.email;
            this.produttore.partitaIva = data.partitaIva;

        });
    }

    createRemote(): Observable<ProduttoreDTO> {
        let item: ProduttoreCreateDTO = {
            nome: this.registerForm?.value.produttore.nome,
            cognome: this.registerForm?.value.produttore.cognome,
            codiceFiscale: this.registerForm?.value.produttore.codiceFiscale,
            numeroPrivato: this.registerForm?.value.produttore.numeroPrivato,
            email: this.registerForm?.value.produttore.email,
            partitaIva: this.registerForm?.value.produttore.partitaIva
        };
        console.log(this.registerForm)
        this.submitted = true;
        this.registerForm.reset();
        return this.service.createProduttore(item).pipe(
            map((v) => v!)
        );
    }
}
