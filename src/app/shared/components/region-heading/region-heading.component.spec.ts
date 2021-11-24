import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionHeadingComponent } from './region-heading.component';

describe('RegionHeadingComponent', () => {
  let component: RegionHeadingComponent;
  let fixture: ComponentFixture<RegionHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionHeadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
