import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CriteriaCatalogueModule } from '@samply/lens-components/criteria-catalogue';
import { ResultRendererGridModule } from '@samply/lens-components/result-renderer-grid';
import { SearchBarModule } from '@samply/lens-components/search-bar';
import { SingleResultRendererModule } from '@samply/lens-components/single-result-renderer';
import {
  CATALOGUE_FETCHER_TOKEN,
  Category,
  chartColors,
  ChipTransformPipe,
  ColorScheme,
  LensConfig,
  LENS_CONFIG_TOKEN,
  primaryButtonColors,
  QUERY_TRANSLATOR_TOKEN,
  RESULT_TRANSFORMER_TOKEN,
  STATIC_CATALOGUE_TOKEN,
  TypescriptCatalogueFetcherService,
} from '@samply/lens-core';
import { ButtonModule } from 'primeng/button';

import { MainComponent } from './main.component';

const STATIC_CATALOGUE: Array<Category> = [];

const primaryButtonColors: primaryButtonColors = {
  buttonSuccess: ['#ffffff', '#003674'],
  buttonWarning: ['#ffffff', '#E95713'],
  buttonInfo: ['#003674', '#ffffff'],
};

const chartColors: chartColors = {};

const colorScheme = new ColorScheme().setPrimaryButtonColors(
  primaryButtonColors
);

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    const queryTranslatorSpy = jasmine.createSpyObj(['transform']);
    const resultTransformerSpy = jasmine.createSpyObj(['transform']);
    await TestBed.configureTestingModule({
      imports: [
        SearchBarModule,
        CriteriaCatalogueModule,
        SingleResultRendererModule,
        ResultRendererGridModule,
        ButtonModule,
      ],
      declarations: [MainComponent],
      providers: [
        {
          provide: QUERY_TRANSLATOR_TOKEN,
          useValue: queryTranslatorSpy,
        },
        {
          provide: RESULT_TRANSFORMER_TOKEN,
          useValue: resultTransformerSpy,
        },
        {
          provide: LENS_CONFIG_TOKEN,
          useValue: new LensConfig(),
        },
        {
          provide: ChipTransformPipe,
        },
        {
          provide: CATALOGUE_FETCHER_TOKEN,
          useClass: TypescriptCatalogueFetcherService,
        },
        {
          provide: STATIC_CATALOGUE_TOKEN,
          useValue: STATIC_CATALOGUE,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
