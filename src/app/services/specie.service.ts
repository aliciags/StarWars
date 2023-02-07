import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Specie } from '../models/specie.model';

const baseUrl = 'https://swapi.dev/api/species';

@Injectable({
  providedIn: 'root'
})
export class SpecieService {

  constructor(private http: HttpClient) { }

  getAll(page?: number, wookie?: boolean) {
    let params: HttpParams = new HttpParams()
    params = page ? params.append('page', page) : params;
    params = wookie ? params.append('wookie', wookie) : params;
    return this.http.get<Specie[]>( baseUrl, {params});
  }

  getSpecie(id: number, wookie?: boolean) {
    let params: HttpParams = new HttpParams()
    params = wookie ? params.append('wookie', wookie) : params;
    return this.http.get<Specie>( `${baseUrl}/${id}`, {params});
  }
}
