import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionTitleComponent } from './region-title.component';

describe('RegionTitleComponent', () => {
  let component: RegionTitleComponent;
  let fixture: ComponentFixture<RegionTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
