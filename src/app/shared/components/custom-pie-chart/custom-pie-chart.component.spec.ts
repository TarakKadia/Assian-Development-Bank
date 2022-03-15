import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPieChartComponent } from './custom-pie-chart.component';

describe('CustomPieChartComponent', () => {
  let component: CustomPieChartComponent;
  let fixture: ComponentFixture<CustomPieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomPieChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
