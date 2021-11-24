import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyCounterComponent } from './currency-counter.component';

describe('CurrencyCounterComponent', () => {
  let component: CurrencyCounterComponent;
  let fixture: ComponentFixture<CurrencyCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
