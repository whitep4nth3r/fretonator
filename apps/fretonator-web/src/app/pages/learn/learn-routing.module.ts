import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { LearnIndexComponent } from './learn-index/learn-index.component';
import { ScrollToGuard } from '../../common/scroll-to/scroll-to.guard';

const learnHub: Route = {
  path: '',
  pathMatch: 'full',
  canActivate: [ScrollToGuard],
  component: LearnIndexComponent,
};

const routes: Routes = [learnHub];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearnRoutingModule {}
