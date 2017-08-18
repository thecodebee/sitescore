import { Site } from '../../../models/site';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent {

  @Input() selectedSite: Site;
  constructor() { }

}
