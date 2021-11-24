import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalGraphChartComponent } from './horizontal-graph-chart.component';

describe('HorizontalGraphChartComponent', () => {
  let component: HorizontalGraphChartComponent;
  let fixture: ComponentFixture<HorizontalGraphChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalGraphChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalGraphChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
