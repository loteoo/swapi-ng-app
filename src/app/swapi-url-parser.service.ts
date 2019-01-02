import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwapiUrlParserService {

  constructor() { }

  extractId(url: String) {
    return url.replace('https://swapi.co/api/', '').split('/')[1];
  }

}
