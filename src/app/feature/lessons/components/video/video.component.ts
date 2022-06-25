import { Component, Input } from '@angular/core';
import { GetLessonBySlugQuery } from 'src/app/helper/generated';
import { VideoLesson } from './../../lesson.type';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent{
  @Input() public details!: GetLessonBySlugQuery['lesson'];
  constructor() { }


}
