import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { LearnIndexComponent } from './learn-index/learn-index.component';
import { PatternsIndexComponent } from './patterns-index/patterns-index.component';
import { ScrollToGuard } from '../../common/scroll-to/scroll-to.guard';

const learnHub: Route = {
  path: '',
  pathMatch: 'full',
  canActivate: [
    ScrollToGuard
  ],
  component: LearnIndexComponent,
};

const patterns: Route = {
  path: 'patterns',
  pathMatch: 'full',
  canActivate: [
    ScrollToGuard
  ],
  component: PatternsIndexComponent,
};

const routes: Routes = [learnHub, patterns];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnRoutingModule { }
