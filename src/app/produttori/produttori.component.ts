import {Component, ViewChild} from '@angular/core';
import {map, Observable} from "rxjs";
import {
  PageProduttoreDTO, ProduttoreCreateDTO,
  ProduttoreCriteria, ProduttoreDTO,
  ProduttoreRestAdapterService
} from "../../../libs/api/produttori-service/src/lib";
import {IListPagination, IListSort, ITestSort, serializeSort} from "../utils/common.model";
import {ProduttoriFilter} from "./produttori.filter";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-produttori',
  templateUrl: './produttori.component.html',
  styleUrls: ['./produttori.component.css']
})
export class ProduttoriComponent {
  @ViewChild('sf') searchForm: NgForm;

  constructor(
      private service: ProduttoreRestAdapterService

  ) { }

  onSubmit() {
    let filter: ProduttoriFilter = {
      nome: this.searchForm.value.produttore.nome,
      cognome: this.searchForm.value.produttore.cognome,
    };
    let pagination: IListPagination = {
      limit: 4,
      offset: 0
    };
    let sort: ITestSort[] = [{
      direction: 'asc'
    }]
    console.log(filter)
    let values: Observable<PageProduttoreDTO> =
        this.searchRemote(filter, pagination, sort);

    values.subscribe(produttoreDto => {
      // @ts-ignore
      console.log(produttoreDto.content?.pop().id)
    })
  }


    searchRemote(
      filter: ProduttoriFilter,
      pagination: IListPagination,
      sort: ITestSort[]
  )
        : Observable<PageProduttoreDTO>
  {
      const criteria: ProduttoreCriteria = {
        id: ['313006d8-d04a-4bba-bb8d-3442b620e866']
      };
    //   let sorting : string = sort.values().next().value
    //   let sortingArray: string[] = [sorting]
    const pageable = {
      sort: [sort.values().next().value],
      page: pagination.offset,
      size: pagination.limit
    };
    return      this.service.searchProduttore(criteria, pageable)
    //       .subscribe(responseData =>{
    //   console.log(responseData);
    //     console.log(responseData.content?.values().next().value.cognome)
    // });


        .pipe(
        map((v) => v!)
    );
  }
}
