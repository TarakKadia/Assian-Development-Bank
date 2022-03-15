import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDonoughtChartComponent } from './custom-donought-chart.component';

describe('CustomDonoughtChartComponent', () => {
  let component: CustomDonoughtChartComponent;
  let fixture: ComponentFixture<CustomDonoughtChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDonoughtChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDonoughtChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
