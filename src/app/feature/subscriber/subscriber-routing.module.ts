import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscriberViewerComponent } from './container/subscriber-viewer/subscriber-viewer.component';

const routes: Routes = [{ path: '', component: SubscriberViewerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscriberRoutingModule {}
