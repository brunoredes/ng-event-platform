import { LessonsService } from '../../lessons.service';
import { LessonType } from '../../lesson.type';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lessons-view',
  templateUrl: './lessons-view.component.html',
  styleUrls: ['./lessons-view.component.scss'],
})
export class LessonsViewComponent implements OnInit {
  public lesson!: LessonType[];
  constructor(private lessonsService: LessonsService) {}

  ngOnInit(): void {
    this.lessonsService.getLessons().subscribe((response) => {
      this.lesson = response.lessons;
    });
  }
}
