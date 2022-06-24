import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoUtilsFooterComponent } from './video-utils-footer.component';

describe('VideoUtilsFooterComponent', () => {
  let component: VideoUtilsFooterComponent;
  let fixture: ComponentFixture<VideoUtilsFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoUtilsFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoUtilsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
