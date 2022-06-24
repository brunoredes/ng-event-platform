import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonsViewComponent } from './container/lessons-view/lessons-view.component';
import { VideoLessonComponent } from './container/video-lesson/video-lesson.component';
import { VoidVideoComponent } from './container/void-video/void-video.component';

const routes: Routes = [
  {
    path: '',
    component: LessonsViewComponent,
    children: [
      { path: 'lesson/:slug', component: VideoLessonComponent },
      { path: '**', component: VoidVideoComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LessonsRoutingModule {}
