import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

import { environment } from 'src/environments/environment';
import { staticCatalogue } from 'src/assets/catalogue';

import { ImageModule } from 'primeng/image';
import {TableModule} from "primeng/table";
import {CardModule} from "primeng/card";
import {BeaconResultTableComponent} from "./components/beacon-result-table/beacon-result-table.component";
import { NegotiateButtonModule } from '@samply/lens-components/negotiate-button';

import {
  CATALOGUE_FETCHER_TOKEN,
  ChipTransformPipe,
  LensCoreModule,
  QUERY_TRANSLATOR_TOKEN,
  RESULT_TRANSFORMER_TOKEN,
  STATIC_CATALOGUE_TOKEN,
  TypescriptCatalogueFetcherService,
} from '@samply/lens-core';

import {
  MeasureTransformerService
} from '@samply/lens-core/cql';

import { SearchBarModule } from '@samply/lens-components/search-bar';
import { CriteriaCatalogueModule } from '@samply/lens-components/criteria-catalogue';
import { ResultSummaryBarModule } from '@samply/lens-components/result-summary-bar';
import { ResultRendererGridModule } from '@samply/lens-components/result-renderer-grid';
import { SingleResultRendererModule } from '@samply/lens-components/single-result-renderer';
import { ChartJsModule } from '@samply/lens-components/chart-js';
import {TostringTranslatorService} from "./services/tostring-translator.service";

const routes: Routes = [{ path: '', component: MainComponent }];

@NgModule({
  declarations: [AppComponent, MainComponent, BeaconResultTableComponent],
  imports: [
    BrowserModule,
    SearchBarModule,
    CriteriaCatalogueModule,
    ResultSummaryBarModule,
    ResultRendererGridModule,
    BrowserAnimationsModule,
    LensCoreModule.forRoot(environment.lensConfig),
    ImageModule,
    SingleResultRendererModule,
    RouterModule.forRoot(routes),
    ChartJsModule,
    TableModule,
    CardModule,
    NegotiateButtonModule
  ],
  providers: [
    {
      provide: QUERY_TRANSLATOR_TOKEN,
      useClass: TostringTranslatorService,
    },
    {
      provide: RESULT_TRANSFORMER_TOKEN,
      useClass: MeasureTransformerService,
    },
    {
      provide: CATALOGUE_FETCHER_TOKEN,
      useClass: TypescriptCatalogueFetcherService,
    },
    {
      provide: STATIC_CATALOGUE_TOKEN,
      useValue: staticCatalogue,
    },
    ChipTransformPipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
