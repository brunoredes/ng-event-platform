import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './routing.module';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { RouteReuseStrategy } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomRouteReuseStrategy } from './CustomRouterReuseStrategy';
import { GraphQLModule } from './graphql.module';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GraphQLModule, CoreModule, AppRoutingModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
