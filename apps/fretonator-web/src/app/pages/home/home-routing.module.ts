import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomeIndexComponent } from './home-index/home-index.component';
import { RouteToModeConfigurationService } from '../../common/route-to-note/route-to-mode-configuration.service';

const home: Route = {
  path: '',
  pathMatch: 'full',
  resolve: {
    selected: RouteToModeConfigurationService,
  },
  component: HomeIndexComponent,
};

const fretonator: Route = {
  path: ':note/:noteExtender/:mode',
  resolve: {
    selected: RouteToModeConfigurationService,
  },
  component: HomeIndexComponent,
};

const routes: Routes = [home, fretonator];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
