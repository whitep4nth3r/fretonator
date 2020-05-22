import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomeIndexComponent } from './home-index/home-index.component';

const home: Route = {
  path: '',
  pathMatch: 'full',
  component: HomeIndexComponent,
};

const routes: Routes = [home];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
