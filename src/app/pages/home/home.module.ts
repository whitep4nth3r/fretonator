import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeIndexComponent } from './home-index/home-index.component';
import { FretonatorModule } from 'src/app/common/fretonator/fretonator.module';
import { SymbolToNoteObjPipe } from './home-index/symbol-to-note-obj.pipe';
import { GenerateFretMapPipe } from './home-index/generate-fret-map.pipe';

@NgModule({
  declarations: [HomeIndexComponent, SymbolToNoteObjPipe, GenerateFretMapPipe],
  imports: [CommonModule, FormsModule, HomeRoutingModule, FretonatorModule],
})
export class HomeModule {}
