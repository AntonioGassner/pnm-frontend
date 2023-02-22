import {Component, ViewChild} from '@angular/core';
import {map, Observable} from "rxjs";
import {
    AziendaCriteria, AziendaDTO, AziendaRestAdapterService, PageAziendaDTO, StringFilter
} from "../../../libs/api/produttori-service/src/lib";
import {IListPagination, ITestSort} from "../utils/common.model";
import {ProduttoriFilter} from "./produttori.filter";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
    selector: 'app-produttori',
    templateUrl: './produttori.component.html',
    styleUrls: ['./produttori.component.css']
})
export class ProduttoriComponent {
    @ViewChild('sf') searchForm: NgForm;
    produttori: Array<AziendaDTO> | undefined;

    constructor(
        private service: AziendaRestAdapterService,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        console.log('onInit')
        let filter: ProduttoriFilter = {};
        let pagination: IListPagination = {
            limit: 12,
            offset: 0
        };
        let sort: ITestSort[] = [{
            direction: 'asc'
        }]
        const criteria: AziendaCriteria = {};

        const pageable = {
            sort: [sort.values().next().value],
            page: pagination.offset,
            size: pagination.limit
        };
        let searchResult: Observable<PageAziendaDTO> = this.service.searchAzienda(criteria, pageable).pipe(
            map((v) => v!)
        );
        searchResult.subscribe(data => {
            this.produttori = data.content
            console.log(data)
            data.content?.forEach(element => {
                console.log(element.comune)
            })
        })
    }

    onSubmit() {
        const criteria: AziendaCriteria = {};
        if (this.searchForm.value.nomeAzienda !== undefined) {
            let nomeFilter: StringFilter = {
                equals: this.searchForm.value.nomeAzienda,
                _in: ['nomeAzienda']
            }
            criteria.nomeAzienda = [nomeFilter]
        }
        if (this.searchForm.value.provincia !== undefined) {
            let cognomeFilter: StringFilter = {
                equals: this.searchForm.value.provincia,
                _in: ['provincia']
            }
            criteria.provincia = [cognomeFilter]
        }
        if (this.searchForm.value.tipoProdotto !== undefined) {
            let cognomeFilter: StringFilter = {
                equals: this.searchForm.value.tipoProdotto,
                _in: ['tipoProdotto']
            }
            criteria.tipoProdotto = [cognomeFilter]
        }
        let pagination: IListPagination = {
            limit: 12,
            offset: 0
        };
        let sort: ITestSort[] = [{
            direction: 'asc'
        }]
        let searchResult: Observable<PageAziendaDTO> = this.searchRemote(criteria, pagination, sort);
        searchResult.subscribe(data => {
            this.produttori = data.content
        })

    }

    searchRemote(
        criteria: AziendaCriteria,
        pagination: IListPagination,
        sort: ITestSort[]
    ): Observable<PageAziendaDTO> {
        const pageable = {
            sort: [sort.values().next().value],
            page: pagination.offset,
            size: pagination.limit
        };
        return this.service.searchAzienda(criteria, pageable).pipe(
            map((v) => v!)
        );
    }

    viewDettaglio(index: number) {
        if (this.produttori) {
            let produttore: AziendaDTO;
            produttore = this.produttori[index];
            let n: number = 10;
            this.router.navigate(['/profilo', 15]);
        }
    }

    getProduttore(index: number): AziendaDTO{
        // @ts-ignore
        return this.produttori[index];
    }
}
