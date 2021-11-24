import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialHighlightsComponent } from './financial-highlights.component';

describe('FinancialHighlightsComponent', () => {
  let component: FinancialHighlightsComponent;
  let fixture: ComponentFixture<FinancialHighlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialHighlightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
