import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './common/header/header.module';
import { FooterModule } from './common/footer/footer.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MoonModule } from './common/svgs/moon/moon.module';
import { SunModule } from './common/svgs/sun/sun.module';

// import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    MoonModule,
    SunModule
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
