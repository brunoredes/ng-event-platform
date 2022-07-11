import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GraphQLModule } from './graphql.module';
import { fakeAsync } from '@angular/core/testing';
import { render } from '@testing-library/angular';
import { AppComponent } from './app.component';
import { LOCALE_ID } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { CustomRouteReuseStrategy } from './CustomRouterReuseStrategy';

describe('AppComponent', () => {
  beforeEach(fakeAsync(async () => {
    await render(AppComponent, {
      imports: [GraphQLModule, HttpClientTestingModule],
      providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
      componentProviders: [
        { provide: RouteReuseStrategy, useValue: new CustomRouteReuseStrategy() },
      ],
    });
  }));

  it('should create the app', () => {
    expect(AppComponent).toBeTruthy();
  });
});
