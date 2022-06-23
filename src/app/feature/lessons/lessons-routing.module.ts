import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonsAsideComponent } from './container/lessons-aside/lessons-aside.component';

const routes: Routes = [{ path: '', component: LessonsAsideComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonsRoutingModule {}
