import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';
import { HomeHomeComponent } from './home-home/home-home.component';

const home: Route = {
  path: '',
  pathMatch: 'full',
  component: HomeHomeComponent,
};

const routes: Routes = [home];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
