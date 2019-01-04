import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { SwapiCollection } from '../swapi-collection';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  planets: Array<Object> = [];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getPlanets().subscribe((data: SwapiCollection) => {
      this.planets = this.data.appendIds(data.results);
    })
  }

}
