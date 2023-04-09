import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {
    AziendaDTO,
    AziendaRestAdapterService,
    AziendaUpdateDTO
} from "../../../libs/api/produttori-service/src/lib";
import {map, Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    @ViewChild('ef') editForm: NgForm;
    produttore: AziendaDTO = {
        id: '',
        nomeProduttore: '',
        cognomeProduttore: '',
        partitaIva: '',
        numeroPrivato: '',
        emailPrivata: '',
        codiceFiscale: '',
        tesseramentoAttivo: false,
        nomeAzienda: '',
        ragioneSociale: '',
        numeroAzienda: '',
        emailAzienda: '',
        comune: '',
        provincia: '',
        indirizzo: '',
        cap: '',
        descrizioneBreve: '',
        descrizioneLunga: '',
        linkFacebook: '',
        linkYoutube: '',
        linkInstagram: '',
        linkWebsite: '',
        linkTicToc: '',
        tipoProdotto: '',
        password: '',
        image1: '',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
    }

    constructor(
        private service: AziendaRestAdapterService,
        private route: ActivatedRoute,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        this.findRemote();
    }

    findRemote() {
        const n = this.route.snapshot.params['id'];
        let ids: Array<string> = [n];
        let searchResult: Observable<Array<AziendaDTO>> = this.service.findAziendaByIds(ids).pipe(
            map((v) => v!)
        );
        searchResult.subscribe(item => {
            let data: AziendaDTO | undefined = item.pop();
            if (data) {
                this.produttore.id = data?.id;
                this.produttore.nomeProduttore = data.nomeProduttore;
                this.produttore.cognomeProduttore = data.cognomeProduttore;
                this.produttore.partitaIva = data.partitaIva;
                this.produttore.numeroPrivato = data.numeroPrivato;
                this.produttore.emailPrivata = data.emailPrivata;
                this.produttore.codiceFiscale = data.codiceFiscale;
                this.produttore.tesseramentoAttivo = data.tesseramentoAttivo;
                this.produttore.nomeAzienda = data.nomeAzienda;
                this.produttore.ragioneSociale = data.ragioneSociale;
                this.produttore.numeroAzienda = data.numeroAzienda;
                this.produttore.emailAzienda = data.emailAzienda;
                this.produttore.comune = data.comune;
                this.produttore.provincia = data.provincia;
                this.produttore.indirizzo = data.indirizzo;
                this.produttore.cap = data.cap;
                this.produttore.descrizioneBreve = data.descrizioneBreve;
                this.produttore.descrizioneLunga = data.descrizioneLunga;
                this.produttore.linkFacebook = data.linkFacebook;
                this.produttore.linkYoutube = data.linkYoutube;
                this.produttore.linkInstagram = data.linkInstagram;
                this.produttore.linkWebsite = data.linkWebsite;
                this.produttore.linkTicToc = data.linkTicToc;
                this.produttore.tipoProdotto = data.tipoProdotto;
                this.produttore.password = data.password;
                this.produttore.image1 = data.image1;
                this.produttore.image2 = data.image2;
                this.produttore.image3 = data.image3;
                this.produttore.image4 = data.image4;
                this.produttore.image5 = data.image5;
                console.log(this.produttore);
            }
        });
    }

    onSubmit() {
        let output: Observable<AziendaDTO> = this.editRemote();
        output.subscribe(data => {
            if (data) {
                this.produttore.id = data?.id;
                this.produttore.nomeProduttore = data.nomeProduttore;
                this.produttore.cognomeProduttore = data.cognomeProduttore;
                this.produttore.partitaIva = data.partitaIva;
                this.produttore.numeroPrivato = data.numeroPrivato;
                this.produttore.emailPrivata = data.emailPrivata;
                this.produttore.codiceFiscale = data.codiceFiscale;
                this.produttore.tesseramentoAttivo = data.tesseramentoAttivo;
                this.produttore.nomeAzienda = data.nomeAzienda;
                this.produttore.ragioneSociale = data.ragioneSociale;
                this.produttore.numeroAzienda = data.numeroAzienda;
                this.produttore.emailAzienda = data.emailAzienda;
                this.produttore.comune = data.comune;
                this.produttore.provincia = data.provincia;
                this.produttore.indirizzo = data.indirizzo;
                this.produttore.cap = data.cap;
                this.produttore.descrizioneBreve = data.descrizioneBreve;
                this.produttore.descrizioneLunga = data.descrizioneLunga;
                this.produttore.linkFacebook = data.linkFacebook;
                this.produttore.linkYoutube = data.linkYoutube;
                this.produttore.linkInstagram = data.linkInstagram;
                this.produttore.linkWebsite = data.linkWebsite;
                this.produttore.linkTicToc = data.linkTicToc;
                this.produttore.tipoProdotto = data.tipoProdotto;
                this.produttore.password = data.password;
                this.produttore.image1 = data.image1;
                this.produttore.image2 = data.image2;
                this.produttore.image3 = data.image3;
                this.produttore.image4 = data.image4;
                this.produttore.image5 = data.image5;
                console.log(this.produttore);
            }
        });
        if (this.produttore.id) {
            this.router.navigate(['/dashboard', this.produttore.id]);

        }
    }

    editRemote(): Observable<AziendaDTO> {
        console.log('editRemote');
        console.log(this.editForm?.value.id);
        let item: AziendaUpdateDTO = {
            codiceFiscale:this.editForm?.value.produttore.codiceFiscale,
            cognomeProduttore: this.editForm?.value.produttore.cognomeProduttore,
            id: this.editForm?.value.produttore.id,
            image1: this.editForm?.value.produttore.image1,
            image2: this.editForm?.value.produttore.image2,
            image3: this.editForm?.value.produttore.image3,
            image4: this.editForm?.value.produttore.image4,
            image5: this.editForm?.value.produttore.image5,
            linkYoutube: this.editForm?.value.produttore.linkYoutube,
            nomeProduttore: this.editForm?.value.produttore.nomeProduttore,
            partitaIva: this.editForm?.value.produttore.partitaIva,
            tesseramentoAttivo: this.editForm?.value.produttore.tesseramentoAttivo,
            numeroPrivato: this.editForm?.value.produttore.numeroPrivato,
            emailPrivata: this.editForm?.value.produttore.emailPrivata,
            nomeAzienda: this.editForm?.value.produttore.nomeAzienda,
            ragioneSociale: this.editForm?.value.produttore.ragioneSociale,
            numeroAzienda: this.editForm?.value.produttore.numeroAzienda,
            emailAzienda: this.editForm?.value.produttore.emailAzienda,
            comune: this.editForm?.value.produttore.comune,
            provincia: this.editForm?.value.produttore.provincia,
            indirizzo: this.editForm?.value.produttore.indirizzo,
            cap: this.editForm?.value.produttore.cap,
            password: this.editForm?.value.produttore.password,
            descrizioneBreve: this.editForm?.value.produttore.descrizioneBreve,
            descrizioneLunga: this.editForm?.value.produttore.descrizioneLunga,
            linkFacebook: this.editForm?.value.produttore.linkFacebook,
            linkInstagram: this.editForm?.value.produttore.linkInstagram,
            linkWebsite: this.editForm?.value.produttore.linkWebsite,
            linkTicToc: this.editForm?.value.produttore.linkTicToc,
            tipoProdotto: this.editForm?.value.produttore.tipoProdotto
        };

            console.log(this.editForm?.value.produttore.id);
        this.editForm.reset();
        return this.service.updateAzienda(item).pipe(
            map((v) => v!)
        );
    }
}
