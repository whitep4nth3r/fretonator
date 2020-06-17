import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeComponent } from './coffee.component';


@NgModule({
  declarations: [CoffeeComponent],
  exports: [
    CoffeeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoffeeModule {
}
