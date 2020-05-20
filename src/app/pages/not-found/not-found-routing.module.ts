import { NgModule } from '@angular/core';
import {Routes, RouterModule, Route} from '@angular/router';
import {HomeIndexComponent} from "../home/home-index/home-index.component";
import {NotFoundIndexComponent} from "./not-found-index/not-found-index.component";

const notFound: Route = {
  path: '',
  pathMatch: 'full',
  component: NotFoundIndexComponent,
};

const routes: Routes = [notFound];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotFoundRoutingModule { }
