import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { NotFoundIndexComponent } from "./not-found-index/not-found-index.component";

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
