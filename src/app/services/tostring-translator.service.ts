import {Inject, Injectable} from '@angular/core';
import {
  CatalogueService,
  LensConfig,
  QueryTranslator,
  Operation,
  LENS_CONFIG_TOKEN
} from '@samply/lens-core';

/**
 * This transformer simply converts the AST into a string (JSON-formatted).
 */

@Injectable({
  providedIn: 'root'
})
export class TostringTranslatorService implements QueryTranslator {

  constructor(
    private catalogueService: CatalogueService,
    @Inject(LENS_CONFIG_TOKEN) private configuration: LensConfig
  ) {}

  transform(query: Operation): string {
    return JSON.stringify(query)
  }
}
