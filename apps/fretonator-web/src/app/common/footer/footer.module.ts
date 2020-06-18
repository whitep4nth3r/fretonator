import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { RouterModule } from '@angular/router';
import { CoffeeModule } from '../svgs/coffee/coffee.module';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    CoffeeModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule {
}
