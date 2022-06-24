import { LessonType } from './lessons/lesson.type';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs';

interface GetLessonsQueryResponse {
  lessons: {
    id: string;
    title: string;
    availableAt: Date;
    lessonType: 'live' | 'class';
    slug: string;
  }[];
}

interface GetLessonBySlug {
  lesson: {
    title: string;
    videoId: string;
    description: string;
    teacher: {
      bio: string;
      avatarURL: string;
      name: string;
    };
  };
}

@Injectable({
  providedIn: 'root',
})
export class LessonsService {
  private readonly GET_LESSONS_QUERY = gql`
    {
      lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
        id
        title
        availableAt
        lessonType
        slug
      }
    }
  `;

  private readonly GET_LESSONS_BY_SLUG_QUERY = gql`
    query GetLessonBySlug($slug: String) {
      lesson(where: { slug: $slug }) {
        videoId
        title
        description
        teacher {
          name
          bio
          avatarURL
        }
      }
    }
  `;
  constructor(private apollo: Apollo) {}

  public getLessons() {
    return this.apollo
      .watchQuery<GetLessonsQueryResponse>({
        query: this.GET_LESSONS_QUERY,
      })
      .valueChanges.pipe(
        map((response) => {
          return { ...response.data };
        })
      );
  }

  public getLessonBySlug(slug: LessonType['slug']) {
    return this.apollo
      .watchQuery<GetLessonBySlug>({
        query: this.GET_LESSONS_BY_SLUG_QUERY,
        variables: {
          slug,
        },
      })
      .valueChanges.pipe(map((response) => response.data));
  }
}
