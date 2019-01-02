import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { SwapiUrlParserService } from '../swapi-url-parser.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films: Array;

  constructor(private data: DataService, private parser: SwapiUrlParserService) { }

  ngOnInit() {
    this.data.getFilms().subscribe(data => {

      // Append ID into object 
      for (let i = 0; i < data.results.length; i++) {
        data.results[i]['id'] = this.parser.extractId(data.results[i]['url'])
      }

      this.films = data.results;
    })
  }

}
