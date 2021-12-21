import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedHorizontalChartComponent } from './stacked-horizontal-chart.component';

describe('StackedHorizontalChartComponent', () => {
  let component: StackedHorizontalChartComponent;
  let fixture: ComponentFixture<StackedHorizontalChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackedHorizontalChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackedHorizontalChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
