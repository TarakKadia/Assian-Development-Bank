import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarChartComponent } from './progress-bar-chart.component';

describe('ProgressBarChartComponent', () => {
  let component: ProgressBarChartComponent;
  let fixture: ComponentFixture<ProgressBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressBarChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
