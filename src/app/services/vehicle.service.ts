import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Vehicle } from '../models/vehicle.model';

const baseUrl = 'https://swapi.dev/api/vehicles';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }

  getAll(page?: number, wookie?: boolean) {
    let params: HttpParams = new HttpParams()
    params = page ? params.append('page', page) : params;
    params = wookie ? params.append('wookie', wookie) : params;
    return this.http.get<Vehicle[]>( baseUrl, {params});
  }

  getVehicle(id: number, wookie?: boolean) {
    let params: HttpParams = new HttpParams()
    params = wookie ? params.append('wookie', wookie) : params;
    return this.http.get<Vehicle>( `${baseUrl}/${id}`, {params});
  }
}
