import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementImageGridComponent } from './management-image-grid.component';

describe('ManagementImageGridComponent', () => {
  let component: ManagementImageGridComponent;
  let fixture: ComponentFixture<ManagementImageGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementImageGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementImageGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
