import {Component, OnInit, ViewChild} from '@angular/core';
import {
  PageProduttoreDTO,
  ProduttoreCreateDTO, ProduttoreCriteria,
  ProduttoreDTO,
  ProduttoreRestAdapterService
} from "../../../libs/api/produttori-service/src/lib";
import {NgForm} from "@angular/forms";
import {map, Observable} from "rxjs";
import {ProduttoriFilter} from "../produttori/produttori.filter";
import {IListPagination, ITestSort} from "../utils/common.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('lf') loginForm: NgForm;
  loginSuccesful: boolean = false;
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

  onSubmit() {
    let filter: ProduttoriFilter = {
      nome: this.loginForm.value.produttore.nome,
      cognome: this.loginForm.value.produttore.cognome,
    };
    let pagination: IListPagination = {
      limit: 1,
      offset: 0
    };
    let sort: ITestSort[] = [{
      direction: 'asc'
    }]
    let searchResult: Observable<PageProduttoreDTO> = this.searchRemote(filter, pagination, sort);

    searchResult.subscribe(data => {
      if(data.content !== undefined) {
        this.loginSuccesful = true;
        // @ts-ignore
        let obj: ProduttoreDTO = data.content.pop();
        this.produttore.id = obj.id;
        this.produttore.nome = obj.nome;
        this.produttore.cognome = obj.cognome;
        this.produttore.codiceFiscale = obj.codiceFiscale;
        this.produttore.numeroPrivato = obj.numeroPrivato;
        this.produttore.email = obj.email;
        this.produttore.partitaIva = obj.partitaIva;
        this.produttore.tesseramentoAttivo = obj.tesseramentoAttivo;
      }
    });
  }

  searchRemote(
      filter: ProduttoriFilter,
      pagination: IListPagination,
      sort: ITestSort[]
  ): Observable<PageProduttoreDTO> {
    const criteria: ProduttoreCriteria = {
    };
    const pageable = {
      sort: [sort.values().next().value],
      page: pagination.offset,
      size: pagination.limit
    };
    return this.service.searchProduttore(criteria, pageable).pipe(
        map((v) => v!)
    );
  }

}
