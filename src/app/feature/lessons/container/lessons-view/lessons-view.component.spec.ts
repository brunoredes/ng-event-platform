import { GetLessonsQuery, LessonType } from './../../../../helper/generated';
import { of } from 'rxjs';
import { LessonsService } from './../../lessons.service';
import { VimeModule } from '@vime/angular';
import { SharedModule } from './../../../../shared/shared.module';
import { fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { render } from '@testing-library/angular';

import { LessonsViewComponent } from './lessons-view.component';

describe('LessonsViewComponent', () => {
  const lessons: GetLessonsQuery['lessons'] = [
    {
      id: '4ab23fbb-ecd6-4da4-bba0-b2854c4d65c9',
      title: 'title 1',
      videoId: '22b24d29-4142-4dee-bbfe-9d0d0c213c44',
      lessonType: LessonType.Class,
      slug: 'title-1',
    },
    {
      id: '1e481afc-930b-4f2c-8f7d-688068d52824',
      title: 'title 2',
      videoId: '5832f566-2111-44d3-a832-a1e7ab95f35a',
      lessonType: LessonType.Live,
      slug: 'title-2',
    },
  ];
  beforeEach(fakeAsync(async () => {
      await render(LessonsViewComponent, {
        imports: [RouterTestingModule, SharedModule, VimeModule],
        componentProperties: {},
        componentProviders: [
          {
            provide: LessonsService,
            useValue: jest.fn(() => of(lessons)),
          },
        ],
      })
  }));

  it('should create', () => {
    expect(LessonsViewComponent).toBeTruthy();
  });
});
