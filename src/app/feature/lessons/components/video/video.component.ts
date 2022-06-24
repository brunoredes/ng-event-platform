import { Component, Input } from '@angular/core';
import { VideoLesson } from './../../lesson.type';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent{
  @Input() public details!: VideoLesson;
  constructor() { }


}
