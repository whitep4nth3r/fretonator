import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { ContactIndexComponent } from './contact-index/contact-index.component';
import { ContactSuccessComponent } from './contact-success/contact-success.component';
import { ScrollToGuard } from '../../common/scroll-to/scroll-to.guard';

const contact: Route = {
  path: '',
  pathMatch: 'full',
  canActivate: [
    ScrollToGuard
  ],
  component: ContactIndexComponent
};

const success: Route = {
  path: 'success',
  component: ContactSuccessComponent,
  canActivate: [
    ScrollToGuard
  ]
};

const routes: Routes = [contact, success];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule {
}
