import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonsService } from '../../lessons.service';
import { VideoLesson } from './../../lesson.type';

@Component({
  selector: 'app-video-lesson',
  templateUrl: './video-lesson.component.html',
  styleUrls: ['./video-lesson.component.scss'],
})
export class VideoLessonComponent implements OnInit {
  public lessonSlugData!: VideoLesson;
  constructor(
    private lessonsService: LessonsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.lessonsService
      .getLessonBySlug(this.route.snapshot.params['slug'])
      .subscribe((response) => {
        this.lessonSlugData = response.lesson;
      }
      );

  }

}
