import { Component, Input } from '@angular/core';
import { VideoLesson } from './../../lesson.type';

@Component({
  selector: 'app-video-content',
  templateUrl: './video-content.component.html',
  styleUrls: ['./video-content.component.scss'],
})
export class VideoContentComponent {
  @Input() public videoId!: VideoLesson['videoId'];
  constructor() {}
}
