import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandableContentTwoComponent } from './expandable-content-two.component';

describe('ExpandableContentTwoComponent', () => {
  let component: ExpandableContentTwoComponent;
  let fixture: ComponentFixture<ExpandableContentTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpandableContentTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandableContentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
