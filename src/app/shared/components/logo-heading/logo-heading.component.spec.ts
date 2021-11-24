import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoHeadingComponent } from './logo-heading.component';

describe('LogoHeadingComponent', () => {
  let component: LogoHeadingComponent;
  let fixture: ComponentFixture<LogoHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoHeadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
