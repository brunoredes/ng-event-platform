import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessonsRoutingModule } from './lessons-routing.module';
import { VideoComponent } from './components/video/video.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LessonsAsideComponent } from './container/lessons-aside/lessons-aside.component';
import { LessonsDetailComponent } from './components/lessons-detail/lessons-detail.component';
import { LessonsContentComponent } from './components/lessons-content/lessons-content.component';


@NgModule({
  declarations: [
    VideoComponent,
    SidebarComponent,
    LessonsAsideComponent,
    LessonsDetailComponent,
    LessonsContentComponent
  ],
  imports: [
    CommonModule,
    LessonsRoutingModule
  ],
  exports: [LessonsAsideComponent]
})
export class LessonsModule { }
