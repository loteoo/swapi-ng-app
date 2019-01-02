import { Injectable } from '@angular/core';
import { HttpClient }    from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getPeople() {
    return this.http.get('https://swapi.co/api/people/')
  }
  getFilms() {
    return this.http.get('https://swapi.co/api/films/')
  }

}
