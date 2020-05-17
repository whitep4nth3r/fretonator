import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { AboutHomeComponent } from './about-home/about-home.component';

const home: Route = {
  path: '',
  pathMatch: 'full',
  component: AboutHomeComponent,
};

const routes: Routes = [home];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
