import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeHomeComponent } from './home-home/home-home.component';
import { FretonatorModule } from 'src/app/common/fretonator/fretonator.module';
import { SymbolToNoteObjPipe } from './home-home/symbol-to-note-obj.pipe';
import { GenerateFretMapPipe } from './home-home/generate-fret-map.pipe';

@NgModule({
  declarations: [HomeHomeComponent, SymbolToNoteObjPipe, GenerateFretMapPipe],
  imports: [CommonModule, FormsModule, HomeRoutingModule, FretonatorModule],
})
export class HomeModule {}
