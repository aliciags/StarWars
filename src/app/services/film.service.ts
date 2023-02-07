import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Film } from '../models/film.model';

const baseUrl = 'https://swapi.dev/api/films';


@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }

  getAll(page?: number, wookie?: boolean) {
    let params: HttpParams = new HttpParams()
    params = page ? params.append('page', page) : params;
    params = wookie ? params.append('wookie', wookie) : params;
    return this.http.get<Film[]>( baseUrl, {params});
  }

  getFilm(id: number, wookie?: boolean) {
    let params: HttpParams = new HttpParams()
    params = wookie ? params.append('wookie', wookie) : params;
    return this.http.get<Film>( `${baseUrl}/${id}`, {params});
  }
}
