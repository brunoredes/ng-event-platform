import { fakeAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { render } from '@testing-library/angular';
import { AppComponent } from './app.component';
import { LessonsViewComponent } from './feature/lessons/container/lessons-view/lessons-view.component';
import { SubscriberViewerComponent } from './feature/subscriber/container/subscriber-viewer/subscriber-viewer.component';

describe('AppComponent', () => {
  let routes: Router;
  let location: Location;
  beforeEach(fakeAsync(() => {
    return Promise.resolve(
      render(AppComponent, {
        imports: [RouterTestingModule.withRoutes([])],
        declarations: [SubscriberViewerComponent, LessonsViewComponent]
      })
    );
  }));

  it('Should navigate to home when default url is empty', () => {
    fakeAsync(() => {
      routes.navigate(['']).then(() => {
        expect(location.pathname).toBe('/home')
      })
    });
  });

  it('Should navigate to event when event is written on url', () => {
    fakeAsync(() => {
      routes.navigate(['/event']).then(() => {
        expect(location.pathname).toBe('/event')
      })
    });
  });
});
