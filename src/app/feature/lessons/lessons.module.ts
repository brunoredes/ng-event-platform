import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VimeModule } from '@vime/angular';
import { SharedModule } from './../../shared/shared.module';

import { LessonsContentComponent } from './components/lessons-content/lessons-content.component';
import { LessonsDetailComponent } from './components/lessons-detail/lessons-detail.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { VideoContentComponent } from './components/video-content/video-content.component';
import { VideoUtilsArticleComponent } from './components/video-utils-article/video-utils-article.component';
import { VideoUtilsFooterComponent } from './components/video-utils-footer/video-utils-footer.component';
import { VideoComponent } from './components/video/video.component';
import { LessonsViewComponent } from './container/lessons-view/lessons-view.component';
import { VideoLessonComponent } from './container/video-lesson/video-lesson.component';
import { VoidVideoComponent } from './container/void-video/void-video.component';
import { LessonsRoutingModule } from './lessons-routing.module';

@NgModule({
  declarations: [
    VideoComponent,
    SidebarComponent,
    LessonsViewComponent,
    LessonsDetailComponent,
    LessonsContentComponent,
    VideoContentComponent,
    VideoUtilsFooterComponent,
    VideoUtilsArticleComponent,
    VideoLessonComponent,
    VoidVideoComponent,
  ],
  imports: [CommonModule, LessonsRoutingModule, SharedModule, VimeModule],
  exports: [LessonsViewComponent],
})
export class LessonsModule {}
