import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { LessonsService } from '../../lessons.service';
import { GetLessonBySlugQuery } from './../../../../helper/generated';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-video-lesson',
  templateUrl: './video-lesson.component.html',
  styleUrls: ['./video-lesson.component.scss'],
})
export class VideoLessonComponent implements OnInit, OnDestroy {
  public lessonSlugData!: GetLessonBySlugQuery['lesson'];
  private querySubscription!: Subscription;
  private tabTitle: string = this.route.snapshot.params['slug'];
  constructor(
    private lessonsService: LessonsService,
    private route: ActivatedRoute,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.querySubscription = this.lessonsService
      .getLessonBySlug(this.route.snapshot.params['slug'])
      .subscribe(({ lesson }) => {
        this.lessonSlugData = lesson;
      });

    this.titleService.setTitle(this.tabTitle);
  }

  ngOnDestroy(): void {
    this.querySubscription.unsubscribe();
  }
}
