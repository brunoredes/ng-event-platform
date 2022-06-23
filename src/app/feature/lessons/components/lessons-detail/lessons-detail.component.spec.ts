import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsDetailComponent } from './lessons-detail.component';

describe('LessonsDetailComponent', () => {
  let component: LessonsDetailComponent;
  let fixture: ComponentFixture<LessonsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
