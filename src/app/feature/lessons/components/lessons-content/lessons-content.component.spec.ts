import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsContentComponent } from './lessons-content.component';

describe('LessonsContentComponent', () => {
  let component: LessonsContentComponent;
  let fixture: ComponentFixture<LessonsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonsContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
