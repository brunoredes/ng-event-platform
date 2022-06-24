import { Component, Input, OnInit } from '@angular/core';
import { LessonType } from '../../lesson.type';
import { isPast } from 'date-fns';

@Component({
  selector: 'app-lessons-content',
  templateUrl: './lessons-content.component.html',
  styleUrls: ['./lessons-content.component.scss'],
})
export class LessonsContentComponent implements OnInit {
  @Input() public detail!: LessonType;

  isLessonAvailable!: boolean;

  constructor() {}

  ngOnInit(): void {
    this.isLessonAvailable = isPast(new Date(this.detail?.availableAt));
  }
}
