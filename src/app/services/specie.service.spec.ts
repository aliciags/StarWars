import 'zone.js';
import 'zone.js/testing';
import { TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { SpecieService } from './specie.service';

describe('SpecieService', () => {
  let httpMock: HttpTestingController;
  let service: SpecieService;

  beforeEach(() => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(BrowserDynamicTestingModule,
       platformBrowserDynamicTesting());
       
    TestBed.configureTestingModule({
        imports: [
          HttpClientModule,
          HttpClientTestingModule
        ],
        providers: [SpecieService]
      });
      httpMock = TestBed.inject(HttpTestingController);
      service = TestBed.inject(SpecieService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
