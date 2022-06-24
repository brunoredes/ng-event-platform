import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadChildren: () =>
      import('./feature/subscriber/subscriber.module').then(
        (m) => m.SubscriberModule
      ),
  },
  {
    path: 'event',
    loadChildren: () =>
      import('./feature/lessons/lessons.module').then((m) => m.LessonsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
