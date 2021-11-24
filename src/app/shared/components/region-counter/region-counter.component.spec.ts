import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionCounterComponent } from './region-counter.component';

describe('RegionCounterComponent', () => {
  let component: RegionCounterComponent;
  let fixture: ComponentFixture<RegionCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
