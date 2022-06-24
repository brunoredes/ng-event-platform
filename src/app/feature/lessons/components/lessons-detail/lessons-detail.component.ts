import { LessonType } from './../../lesson.type';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lessons-detail',
  templateUrl: './lessons-detail.component.html',
  styleUrls: ['./lessons-detail.component.scss'],
})
export class LessonsDetailComponent {
  @Input() public detail!: LessonType;
  @Input() public navigation: string = '';
  constructor() {}
}
