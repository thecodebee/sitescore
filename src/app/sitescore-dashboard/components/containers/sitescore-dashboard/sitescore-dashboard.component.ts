import { Component } from '@angular/core';

import { Site } from '../../../models/site';

@Component({
  selector: 'sitescore-dashboard',
  templateUrl: './sitescore-dashboard.component.html',
  styleUrls: ['./sitescore-dashboard.component.scss']
})
export class SitescoreDashboardComponent {

  siteList: Site[];
  
  constructor() { 
    this.siteList = [
      {
        name: "Code Bee",
        url: "https://thecodebee.com",
        domain: "codebee.com",
        mobileScore: 91,
        desktopScore: 89
      },
      {
        name: "Vaagai Studios",
        url: "http://vaagaistudios.com",
        domain: "vaagaistudios.com",
        mobileScore: 80,
        desktopScore: 90
      }
    ]
  }

  addWebsite(siteName:HTMLInputElement, siteURL: HTMLInputElement){
    console.log(`new website name: ${siteName.value} and url: ${siteURL.value}`);
    this.siteList.push(
      {
        name: siteName.value,
        url: siteURL.value
      }
    )
    siteName.value = "";
    siteURL.value = "";
    return false;
  }
    
}
