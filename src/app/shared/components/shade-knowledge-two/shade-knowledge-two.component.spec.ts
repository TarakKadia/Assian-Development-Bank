import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadeKnowledgeTwoComponent } from './shade-knowledge-two.component';

describe('ShadeKnowledgeTwoComponent', () => {
  let component: ShadeKnowledgeTwoComponent;
  let fixture: ComponentFixture<ShadeKnowledgeTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShadeKnowledgeTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadeKnowledgeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
