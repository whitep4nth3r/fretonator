import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { ContactIndexComponent } from './contact-index/contact-index.component';
import { ContactSuccessComponent } from './contact-success/contact-success.component';

const contact: Route = {
  path: '',
  pathMatch: 'full',
  component: ContactIndexComponent
};

const success: Route = {
  path: 'success',
  component: ContactSuccessComponent
};

const routes: Routes = [contact, success];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule {
}
