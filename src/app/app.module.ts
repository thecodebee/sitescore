import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SiteComponent } from './components/site/site.component';
import { DomainPipe } from './pipes/domain.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SiteComponent,
    DomainPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
