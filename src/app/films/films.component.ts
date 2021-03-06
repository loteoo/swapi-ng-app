import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { SwapiCollection } from '../swapi-collection';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films: Array<Object> = [];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getFilms().subscribe((data: SwapiCollection) => {
      this.films = this.data.appendIds(data.results);
    })
  }

}
