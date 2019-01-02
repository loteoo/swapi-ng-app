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

  getPerson(id: number) {
    return this.http.get('https://swapi.co/api/people/' + id)
  }

  getFilms() {
    return this.http.get('https://swapi.co/api/films/')
  }

  getFilm(id: number) {
    return this.http.get('https://swapi.co/api/films/' + id)
  }

  getStarships() {
    return this.http.get('https://swapi.co/api/starships/')
  }

  getStarship(id: number) {
    return this.http.get('https://swapi.co/api/starships/' + id)
  }

  getVehicles() {
    return this.http.get('https://swapi.co/api/vehicles/')
  }

  getVehicle(id: number) {
    return this.http.get('https://swapi.co/api/vehicles/' + id)
  }

  getSpecies() {
    return this.http.get('https://swapi.co/api/species/')
  }

  getSpecie(id: number) {
    return this.http.get('https://swapi.co/api/species/' + id)
  }

  getPlanets() {
    return this.http.get('https://swapi.co/api/planets/')
  }

  getPlanet(id: number) {
    return this.http.get('https://swapi.co/api/planets/' + id)
  }

}
