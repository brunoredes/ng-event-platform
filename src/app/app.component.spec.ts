import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GraphQLModule } from './graphql.module';
import { fakeAsync } from '@angular/core/testing';
import { render } from '@testing-library/angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(fakeAsync(async () => {
    await render(AppComponent, {
      imports: [GraphQLModule, HttpClientTestingModule]
    });
  }));

  it('should create the app', () => {
    expect(AppComponent).toBeTruthy();
  });
});
