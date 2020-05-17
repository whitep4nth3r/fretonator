import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeHomeComponent } from './home-home/home-home.component';
import { FretonatorModule } from 'src/app/common/fretonator/fretonator.module';

@NgModule({
  declarations: [HomeHomeComponent],
  imports: [CommonModule, HomeRoutingModule, FretonatorModule],
})
export class HomeModule {}
