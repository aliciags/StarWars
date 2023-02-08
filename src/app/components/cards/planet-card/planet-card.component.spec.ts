import 'zone.js';
import 'zone.js/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetCardComponent } from './planet-card.component';

describe('PlanetCardComponent', () => {
  let component: PlanetCardComponent;
  let fixture: ComponentFixture<PlanetCardComponent>;

  beforeEach(async () => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(BrowserDynamicTestingModule,
       platformBrowserDynamicTesting());

    await TestBed.configureTestingModule({
      declarations: [ PlanetCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
