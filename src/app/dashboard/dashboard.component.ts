import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {
    AziendaDTO,
    AziendaRestAdapterService,
    AziendaUpdateDTO
} from "../../../libs/api/produttori-service/src/lib";
import {map, Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
    @ViewChild('ef') editForm: NgForm;
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
        descrizioneBreve: '',
        descrizioneLunga: '',
        linkFacebook: '',
        linkYoutube: '',
        linkInstagram: '',
        linkWebsite: '',
        linkTicToc: '',
        tipoProdotto: '',
    }

    log: boolean = false;
  

  constructor(
      private service: AziendaRestAdapterService,
    private route: ActivatedRoute,

) { }

  ngOnInit(): void {
      this.findRemote();

  }

    findRemote() {
        const n = this.route.snapshot.params['id'];
        let ids : Array<string> = [n];
        let searchResult : Observable<Array<AziendaDTO>> = this.service.findAziendaByIds(ids).pipe(
            map((v) => v!)
        );
        searchResult.subscribe(item => {
            let data: AziendaDTO | undefined = item.pop();
            if(data) {
                this.produttore.id = data?.id;
                this.produttore.nomeProduttore = data.nomeProduttore;
                this.produttore.cognomeProduttore = data.cognomeProduttore;
                this.produttore.partitaIva = data.partitaIva;
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
                this.produttore.image1 = data.image1;
                this.produttore.image2 = data.image2;
                this.produttore.image3 = data.image3;
                this.produttore.image4 = data.image4;
                this.produttore.image5 = data.image5;

            }
        });
    }

    onSubmit() {
        let output: Observable<AziendaDTO> = this.editRemote();
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
        });
    }

    editRemote(): Observable<AziendaDTO> {
        let item: AziendaUpdateDTO = {
            nomeProduttore: this.editForm?.value.produttore.nomeProduttore,
            cognomeProduttore: this.editForm?.value.produttore.cognomeProduttore,
            partitaIva: this.editForm?.value.produttore.partitaIva,
            numeroPrivato: this.editForm?.value.produttore.numeroPrivato,
            emailPrivata: this.editForm?.value.produttore.emailPrivata,
            codiceFiscale: this.editForm?.value.produttore.codiceFiscale,
            nomeAzienda: this.editForm?.value.produttore.nomeAzienda,
            ragioneSociale: this.editForm?.value.produttore.ragioneSociale,
            numeroAzienda: this.editForm?.value.produttore.numeroAzienda,
            emailAzienda: this.editForm?.value.produttore.emailAzienda,
            comune: this.editForm?.value.produttore.comune,
            provincia: this.editForm?.value.produttore.provincia,
            indirizzo: this.editForm?.value.produttore.indirizzo,
            cap: this.editForm?.value.produttore.cap,
            password: this.editForm?.value.produttore.password,
        };
        console.log(this.editForm)
        this.editForm.reset();
        return this.service.updateAzienda(item).pipe(
            map((v) => v!)
        );
    }
 edit(){
      console.log()
    if (this.log){
        this.log = false;
    }else {
        this.log = true;
    }

 }
}
