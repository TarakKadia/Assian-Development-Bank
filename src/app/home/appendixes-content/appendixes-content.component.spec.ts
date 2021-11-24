import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppendixesContentComponent } from './appendixes-content.component';

describe('AppendixesContentComponent', () => {
  let component: AppendixesContentComponent;
  let fixture: ComponentFixture<AppendixesContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppendixesContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppendixesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
