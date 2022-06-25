import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LessonsService } from '../../lessons.service';
import { GetLessonsQuery } from './../../../../helper/generated';

@Component({
  selector: 'app-lessons-view',
  templateUrl: './lessons-view.component.html',
  styleUrls: ['./lessons-view.component.scss'],
})
export class LessonsViewComponent implements OnInit, OnDestroy {
  public lessons!: GetLessonsQuery['lessons'];
  private querySubscription!: Subscription;

  constructor(private lessonsService: LessonsService) {}

  ngOnInit(): void {
    this.querySubscription = this.lessonsService
      .getLessons()
      .subscribe(({ lessons }) => {
        this.lessons = lessons;
      });
  }

  ngOnDestroy(): void {
    this.querySubscription.unsubscribe();
  }
}
