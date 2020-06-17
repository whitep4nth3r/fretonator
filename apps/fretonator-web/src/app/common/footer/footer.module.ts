import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { RouterModule } from '@angular/router';
import { CoffeeModule } from '../svgs/coffee/coffee.module';
import { CoffeeComponent } from '../svgs/coffee/coffee.component';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    CoffeeModule,
  ],
  exports: [
    FooterComponent,
    CoffeeComponent
  ]
})
export class FooterModule {
}
