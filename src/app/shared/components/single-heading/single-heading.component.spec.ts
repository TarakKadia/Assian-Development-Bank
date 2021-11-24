import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleHeadingComponent } from './single-heading.component';

describe('SingleHeadingComponent', () => {
  let component: SingleHeadingComponent;
  let fixture: ComponentFixture<SingleHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleHeadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
