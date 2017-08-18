import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SitescoreDashboardModule } from './sitescore-dashboard/sitescore-dashboard.module';
import { SitescoreDashboardComponent } from './sitescore-dashboard/components/containers/sitescore-dashboard/sitescore-dashboard.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SitescoreDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
