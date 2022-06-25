import { GetLessonBySlugQuery } from './../../../../helper/generated';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { LessonsService } from '../../lessons.service';
import { VideoLesson } from './../../lesson.type';

@Component({
  selector: 'app-video-lesson',
  templateUrl: './video-lesson.component.html',
  styleUrls: ['./video-lesson.component.scss'],
})
export class VideoLessonComponent implements OnInit, OnDestroy {
  public lessonSlugData!: GetLessonBySlugQuery['lesson'];
  private querySubscription!: Subscription;
  constructor(
    private lessonsService: LessonsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.querySubscription = this.lessonsService
      .getLessonBySlug(this.route.snapshot.params['slug'])
      .subscribe(({ lesson }) => {
        this.lessonSlugData = lesson;
      });
  }

  ngOnDestroy(): void {
    this.querySubscription.unsubscribe();
  }
}
