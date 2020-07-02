import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactIndexComponent } from './contact-index/contact-index.component';
import { ContactSuccessComponent } from './contact-success/contact-success.component';
import { HttpClientModule } from '@angular/common/http';
import { FormService } from './form.service';
import { TickModule } from '../../common/svgs/tick/tick.module';

@NgModule({
  declarations: [ContactIndexComponent, ContactSuccessComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    TickModule,
  ],
  providers: [
    FormService
  ],
  exports: [
    ContactIndexComponent,
    ContactSuccessComponent
  ]
})
export class ContactModule {
}
