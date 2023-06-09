import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjprdResultTableComponent } from './ejprd-result-table.component';

describe('EjprdResultTableComponent', () => {
  let component: EjprdResultTableComponent;
  let fixture: ComponentFixture<EjprdResultTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjprdResultTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjprdResultTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
