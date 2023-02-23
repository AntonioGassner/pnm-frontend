import {Component, OnInit} from '@angular/core';
import {AziendaDTO, AziendaRestAdapterService} from "../../../libs/api/produttori-service/src/lib";
import {ActivatedRoute, Router} from "@angular/router";
import {map, Observable} from "rxjs";

class List<T> {
}

@Component({
  selector: 'app-profilo-produttore',
  templateUrl: './profilo-produttore.component.html',
  styleUrls: ['./profilo-produttore.component.css']
})
export class ProfiloProduttoreComponent implements OnInit{
  log: boolean = false;
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
      private route: ActivatedRoute,
      private router: Router
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
      }
    });
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
