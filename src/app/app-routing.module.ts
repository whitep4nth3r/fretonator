import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';

const home: Route = {
  path: '',
  pathMatch: 'full',
  loadChildren: () => import('./pages/home/home.module').then((mod) => mod.HomeModule),
};

const about: Route = {
  path: 'about',
  loadChildren: () => import('./pages/about/about.module').then((mod) => mod.AboutModule),
};

const notFound: Route = {
  path: '**',
  loadChildren: () => import('./pages/not-found/not-found.module').then((mod) => mod.NotFoundModule),
};

const routes: Routes = [home, about, notFound];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
