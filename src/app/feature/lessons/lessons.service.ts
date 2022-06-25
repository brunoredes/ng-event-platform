import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import { map } from 'rxjs';
import { GetLessonBySlugGQL, GetLessonsGQL } from './../../helper/generated';
import { LessonType } from './lesson.type';

@Injectable({
  providedIn: 'root',
})
export class LessonsService {

  constructor(
    private lessonsGQL: GetLessonsGQL,
    private lessonsBySlugGQL: GetLessonBySlugGQL
  ) {}

  public getLessons() {
    return this.lessonsGQL.watch().valueChanges.pipe(
      map((response) => {
        return { ...response.data };
      })
    );
  }

  public getLessonBySlug(slug: LessonType['slug']) {
    return this.lessonsBySlugGQL
      .watch({ slug })
      .valueChanges.pipe(map((response) => response.data));
  }
}
