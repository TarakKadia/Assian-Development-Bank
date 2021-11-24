import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:angular-pwa/src/app/shared/components/counter/counter.component.spec.ts
import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
=======
import { MenuBarComponent } from './menu-bar.component';

describe('MenuBarComponent', () => {
  let component: MenuBarComponent;
  let fixture: ComponentFixture<MenuBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBarComponent ]
>>>>>>> eccca48ca40a456f2a6e6827c58f4924450944bf:angular-pwa/src/app/home/menu-bar/menu-bar.component.spec.ts
    })
    .compileComponents();
  });

  beforeEach(() => {
<<<<<<< HEAD:angular-pwa/src/app/shared/components/counter/counter.component.spec.ts
    fixture = TestBed.createComponent(CounterComponent);
=======
    fixture = TestBed.createComponent(MenuBarComponent);
>>>>>>> eccca48ca40a456f2a6e6827c58f4924450944bf:angular-pwa/src/app/home/menu-bar/menu-bar.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
