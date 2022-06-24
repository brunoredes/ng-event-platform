import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoLessonComponent } from './video-lesson.component';

describe('VideoLessonComponent', () => {
  let component: VideoLessonComponent;
  let fixture: ComponentFixture<VideoLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoLessonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
