import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoUtilsArticleComponent } from './video-utils-article.component';

describe('VideoUtilsArticleComponent', () => {
  let component: VideoUtilsArticleComponent;
  let fixture: ComponentFixture<VideoUtilsArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoUtilsArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoUtilsArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
