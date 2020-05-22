import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoWithTextComponent } from './logo-with-text.component';



@NgModule({
    declarations: [LogoWithTextComponent],
    exports: [
        LogoWithTextComponent,
    ],
    imports: [
        CommonModule,
    ],
})
export class LogoWithTextModule { }
