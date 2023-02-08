import 'zone.js';
import 'zone.js/testing';
import { TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

import { VehicleService } from './vehicle.service';

describe('VehicleService', () => {
  let httpMock: HttpTestingController;
  let service: VehicleService;

  beforeEach(() => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(BrowserDynamicTestingModule,
       platformBrowserDynamicTesting());
       
    TestBed.configureTestingModule({
        imports: [
          HttpClientModule,
          HttpClientTestingModule
        ],
        providers: [VehicleService]
      });
      httpMock = TestBed.inject(HttpTestingController);
      service = TestBed.inject(VehicleService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
