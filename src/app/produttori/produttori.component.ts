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
import {storeOutputsWatcherSubscription} from "nx/src/daemon/server/shutdown-utils";

@Component({
    selector: 'app-produttori',
    templateUrl: './produttori.component.html',
    styleUrls: ['./produttori.component.css']
})
export class ProduttoriComponent {
    @ViewChild('sf') searchForm: NgForm;
    // produttori: Array<ProduttoreDTO>;


    constructor(
        private service: ProduttoreRestAdapterService
    ) {
    }

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
        let searchResult: Observable<PageProduttoreDTO> = this.searchRemote(filter, pagination, sort);

      searchResult.subscribe(data => {
        console.log(data)
        })
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
