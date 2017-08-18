import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DomainPipe } from './pipes/domain.pipe';

import { SitescoreDashboardComponent } from './components/containers/sitescore-dashboard/sitescore-dashboard.component';
import { SiteComponent } from './components/presentation/site/site.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DomainPipe,
    SitescoreDashboardComponent,
    SiteComponent
  ],
  exports: [
    SitescoreDashboardComponent
  ]
})
export class SitescoreDashboardModule { }
