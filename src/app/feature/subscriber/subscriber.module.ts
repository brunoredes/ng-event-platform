import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriberRoutingModule } from './subscriber-routing.module';
import { SubscriberViewerComponent } from './container/subscriber-viewer/subscriber-viewer.component';


@NgModule({
  declarations: [
    SubscriberViewerComponent
  ],
  imports: [
    CommonModule,
    SubscriberRoutingModule,
    SharedModule
  ]
})
export class SubscriberModule { }
