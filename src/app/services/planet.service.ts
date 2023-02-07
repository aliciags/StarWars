import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Planet } from '../models/planet.model';

const baseUrl = 'https://swapi.dev/api/planets';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor(private http: HttpClient) { }

  getAll(page?: number, wookie?: boolean) {
    let params: HttpParams = new HttpParams();
    params = page ? params.append('page', page) : params;
    params = wookie ? params.append('wookie', wookie) : params;
    return this.http.get<Planet[]>(baseUrl, {params});
  }


  getPlanet(id: number, wookie?: boolean) {
    let params: HttpParams = new HttpParams();
    params = wookie ? params.append('wookie', wookie) : params;
    return this.http.get<Planet>(`${baseUrl}/${id}`, {params});
  }
}
