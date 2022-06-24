import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './routing.module';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ActivatedRouteSnapshot, RouteReuseStrategy } from '@angular/router';
import { CustomRouteReuseStrategy } from './CustomRouterReuseStrategy';

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
