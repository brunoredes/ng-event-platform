import { Component, Input } from '@angular/core';
import { Lesson, LessonCreateInput } from 'src/app/helper/generated';

@Component({
  selector: 'app-lessons-detail',
  templateUrl: './lessons-detail.component.html',
  styleUrls: ['./lessons-detail.component.scss'],
})
export class LessonsDetailComponent {
  @Input() public detail!: LessonCreateInput;
  @Input() public navigation: string = '';
  constructor() {}
}
