import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { ProduttoriConfiguration } from './configuration';
import { HttpClient } from '@angular/common/http';

import { AziendaRestAdapterService } from './api/azienda-rest-adapter.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: []
})
export class ProduttoriApiModule {
    public static forRoot(configurationFactory: () => ProduttoriConfiguration): ModuleWithProviders<ProduttoriApiModule> {
        return {
            ngModule: ProduttoriApiModule,
            providers: [ { provide: ProduttoriConfiguration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ProduttoriApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ProduttoriApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
