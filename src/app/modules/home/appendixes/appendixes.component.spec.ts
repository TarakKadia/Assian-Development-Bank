import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppendixesComponent } from './appendixes.component';

describe('AppendixesComponent', () => {
  let component: AppendixesComponent;
  let fixture: ComponentFixture<AppendixesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppendixesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppendixesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
