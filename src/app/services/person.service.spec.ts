import 'zone.js';
import 'zone.js/testing';
import { TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

import { PersonService } from './person.service';

const people = [
  {
    name: 'Luke Skywalker',
    birth_year: '19BBY',
    gender: 'male',
    mass: '77',
    height: '172',
    homeworld: 'https://swapi.dev/api/planets/1/'
  },
  {
    name: 'C-3PO',
    birth_year: '112BBY',
    gender: 'n/a',
    mass: '75',
    height: '167',
    homeworld: 'https://swapi.dev/api/planets/1/'
  },
  {
    name: 'R2-D2',
    birth_year: '33BBY',
    gender: 'n/a',
    mass: '32',
    height: '96',
    homeworld: 'https://swapi.dev/api/planets/8/'
  },
]


describe('PersonService', () => {
  let httpMock: HttpTestingController;
  let service: PersonService;

  const personIdMock = 1;
  const pageNumberMock = 3;

  beforeEach(() => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(BrowserDynamicTestingModule,
       platformBrowserDynamicTesting());

    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [PersonService]
    });
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(PersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should call getPerson with personId', (done) => {
    service.getPerson(personIdMock).subscribe((entity) => {
      expect(entity).toEqual({});
      done();
    })
    httpMock.expectOne('https://swapi.dev/api/people/' + personIdMock).flush({});
  })
});
