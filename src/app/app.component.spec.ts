import { TestBed } from '@angular/core/testing';
import { ImageModule } from 'primeng/image';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import {
  CATALOGUE_FETCHER_TOKEN,
  Category,
  ChipTransformPipe,
  LensConfig,
  LENS_CONFIG_TOKEN,
  QUERY_TRANSLATOR_TOKEN,
  RESULT_TRANSFORMER_TOKEN,
  STATIC_CATALOGUE_TOKEN,
  TypescriptCatalogueFetcherService,
} from '@samply/lens-core';

const STATIC_CATALOGUE: Array<Category> = [];

describe('AppComponent', () => {
  beforeEach(async () => {
    const queryTranslatorSpy = jasmine.createSpyObj(['transform']);
    const resultTransformerSpy = jasmine.createSpyObj(['transform']);
    await TestBed.configureTestingModule({
      imports: [ImageModule, RouterTestingModule],
      declarations: [AppComponent],
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
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Samply.Lens Demo'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title.getTitle()).toEqual('Samply.Lens Demo');
  });
});
