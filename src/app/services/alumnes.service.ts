import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnesService {

  private readonly url = 'assets/llistat-alumnes.json';
  constructor(private readonly http: HttpClient) {}


  getAlumnes(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
