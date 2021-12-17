import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordinTableComponent } from './accordin-table.component';

describe('AccordinTableComponent', () => {
  let component: AccordinTableComponent;
  let fixture: ComponentFixture<AccordinTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordinTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordinTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
