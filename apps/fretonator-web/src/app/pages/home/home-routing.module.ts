import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomeIndexComponent } from './home-index/home-index.component';
import { RouteToModeConfigurationService } from '../../common/route-to-mode-configuration/route-to-mode-configuration.service';
import { IsValidModeConfigurationGuard } from '../../common/is-valid-mode-configuration/is-valid-mode-configuration.guard';
import { ScrollToGuard } from '../../common/scroll-to/scroll-to.guard';

const home: Route = {
  path: '',
  pathMatch: 'full',
  canActivate: [
    ScrollToGuard
  ],
  resolve: {
    selected: RouteToModeConfigurationService
  },
  component: HomeIndexComponent
};

const fretonator: Route = {
  path: ':note/:noteExtender/:mode',
  resolve: {
    selected: RouteToModeConfigurationService
  },
  canActivate: [
    IsValidModeConfigurationGuard
  ],
  component: HomeIndexComponent
};

const routes: Routes = [home, fretonator];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
