import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategicFocusPieChartComponent } from './strategic-focus-pie-chart.component';

describe('StrategicFocusPieChartComponent', () => {
  let component: StrategicFocusPieChartComponent;
  let fixture: ComponentFixture<StrategicFocusPieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrategicFocusPieChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategicFocusPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
