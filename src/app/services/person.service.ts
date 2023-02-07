import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Person } from '../models/person.model';

const baseUrl = 'https://swapi.dev/api/people';

@Injectable({
  providedIn: 'root',
})
export class PersonService {

  constructor(private http: HttpClient) { }

  getAll(page?: number, wookie?: string) {
    let params: HttpParams = new HttpParams()
    params = page ? params.append('page', page) : params;
    params = wookie ? params.append('format', wookie) : params;
    return this.http.get<Person[]>( baseUrl, {params});
  }

  getPerson(id: number, wookie?: string) {
    let params: HttpParams = new HttpParams()
    params = wookie ? params.append('format', wookie) : params;
    return this.http.get<Person>( `${baseUrl}/${id}`, {params});
  }
}
