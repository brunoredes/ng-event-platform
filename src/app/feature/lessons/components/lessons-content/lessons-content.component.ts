import { Component, Input, OnInit } from '@angular/core';
import { isPast } from 'date-fns';
import { Lesson, LessonCreateInput } from 'src/app/helper/generated';

@Component({
  selector: 'app-lessons-content',
  templateUrl: './lessons-content.component.html',
  styleUrls: ['./lessons-content.component.scss'],
})
export class LessonsContentComponent implements OnInit {
  @Input() public detail!: LessonCreateInput;

  isLessonAvailable!: boolean;

  constructor() {}

  ngOnInit(): void {
    this.isLessonAvailable = isPast(new Date(this.detail?.availableAt));
  }
}
