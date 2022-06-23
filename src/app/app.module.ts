import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './routing.module';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    GraphQLModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
