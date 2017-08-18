import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitescoreDashboardComponent } from './sitescore-dashboard.component';

describe('SitescoreDashboardComponent', () => {
  let component: SitescoreDashboardComponent;
  let fixture: ComponentFixture<SitescoreDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitescoreDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitescoreDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
