import { VideoLesson } from './../../lesson.type';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-utils-article',
  templateUrl: './video-utils-article.component.html',
  styleUrls: ['./video-utils-article.component.scss']
})
export class VideoUtilsArticleComponent implements OnInit {
  @Input() public details!: VideoLesson;
  constructor() { }

  ngOnInit(): void {
  }

}
