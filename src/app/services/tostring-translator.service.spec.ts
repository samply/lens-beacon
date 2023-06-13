import { TestBed } from '@angular/core/testing';
import { CATALOGUE_FETCHER_TOKEN, Category, LensConfig, LENS_CONFIG_TOKEN, STATIC_CATALOGUE_TOKEN, TypescriptCatalogueFetcherService } from '@samply/lens-core';

import { TostringTranslatorService } from './tostring-translator.service';

const STATIC_CATALOGUE: Array<Category> = [];

describe('TostringTranslatorService', () => {
  let service: TostringTranslatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: LENS_CONFIG_TOKEN,
          useValue: new LensConfig()
        },
        {
          provide: CATALOGUE_FETCHER_TOKEN,
          useClass: TypescriptCatalogueFetcherService
        }, {
          provide: STATIC_CATALOGUE_TOKEN,
          useValue: STATIC_CATALOGUE
        }
      ]
    });
    service = TestBed.inject(TostringTranslatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
