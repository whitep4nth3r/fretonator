import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { LearnIndexComponent } from './learn-index/learn-index.component';
import { PatternsIndexComponent } from './patterns-index/patterns-index.component';

const learnHub: Route = {
  path: '',
  pathMatch: 'full',
  component: LearnIndexComponent,
};

const patterns: Route = {
  path: 'patterns',
  pathMatch: 'full',
  component: PatternsIndexComponent,
};

const routes: Routes = [learnHub, patterns];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnRoutingModule { }
