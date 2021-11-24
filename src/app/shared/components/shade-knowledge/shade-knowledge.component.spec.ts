import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadeKnowledgeComponent } from './shade-knowledge.component';

describe('ShadeKnowledgeComponent', () => {
  let component: ShadeKnowledgeComponent;
  let fixture: ComponentFixture<ShadeKnowledgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShadeKnowledgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadeKnowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
