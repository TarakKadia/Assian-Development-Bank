import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresidentsMessageComponent } from './presidents-message.component';

describe('PresidentsMessageComponent', () => {
  let component: PresidentsMessageComponent;
  let fixture: ComponentFixture<PresidentsMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresidentsMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresidentsMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
