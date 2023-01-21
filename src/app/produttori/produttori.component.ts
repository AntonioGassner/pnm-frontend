import {Component, ViewChild} from '@angular/core';
import {map, Observable} from "rxjs";
import {
    PageProduttoreDTO, ProduttoreCreateDTO,
    ProduttoreCriteria, ProduttoreDTO,
    ProduttoreRestAdapterService, StringFilter
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
    produttori: Array<ProduttoreDTO> | undefined;

    constructor(
        private service: ProduttoreRestAdapterService
    ) {
    }

    ngOnInit(): void {
        let filter: ProduttoriFilter = {
        };
        let pagination: IListPagination = {
            limit: 12,
            offset: 0
        };
        let sort: ITestSort[] = [{
            direction: 'asc'
        }]
        const criteria: ProduttoreCriteria = {
        };

        const pageable = {
            sort: [sort.values().next().value],
            page: pagination.offset,
            size: pagination.limit
        };
        let searchResult: Observable<PageProduttoreDTO> = this.service.searchProduttore(criteria, pageable).pipe(
            map((v) => v!)
        );

        searchResult.subscribe(data => {
            this.produttori = data.content
        })
    }

    onSubmit() {
        console.log(this.searchForm)
        const criteria: ProduttoreCriteria = {
        };

        // if(this.searchForm.id !== undefined){
        //     criteria.id = [filter.id]
        // }
        if(this.searchForm.value.nome !== undefined){
            let nomeFilter: StringFilter = {
                equals: this.searchForm.value.nome,
                _in: ['nome']
            }
            criteria.nome = [nomeFilter]
        }
        if(this.searchForm.value.cognome !== undefined){
            let cognomeFilter: StringFilter = {
                equals: this.searchForm.value.cognome,
                _in: ['cognome']
            }
            criteria.cognome = [cognomeFilter]
        }
        let pagination: IListPagination = {
            limit: 12,
            offset: 0
        };
        let sort: ITestSort[] = [{
            direction: 'asc'
        }]
        // console.log(criteria)
        let searchResult: Observable<PageProduttoreDTO> = this.searchRemote(criteria, pagination, sort);
        searchResult.subscribe(data => {
            this.produttori = data.content
            // console.log(data)
        })

    }

    searchRemote(
        criteria: ProduttoreCriteria,
        pagination: IListPagination,
        sort: ITestSort[]
    ): Observable<PageProduttoreDTO> {
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
