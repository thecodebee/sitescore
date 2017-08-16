import { Site } from './models/site';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

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
