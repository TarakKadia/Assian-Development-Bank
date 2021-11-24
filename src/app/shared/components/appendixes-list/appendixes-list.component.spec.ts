import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppendixesListComponent } from './appendixes-list.component';

describe('AppendixesListComponent', () => {
  let component: AppendixesListComponent;
  let fixture: ComponentFixture<AppendixesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppendixesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppendixesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
