import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterTitleComponent } from './chapter-title.component';

describe('ChapterTitleComponent', () => {
  let component: ChapterTitleComponent;
  let fixture: ComponentFixture<ChapterTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChapterTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
