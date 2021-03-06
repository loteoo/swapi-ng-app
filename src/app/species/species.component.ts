import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { SwapiCollection } from '../swapi-collection';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

  species: Array<Object> = [];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getSpecies().subscribe((data: SwapiCollection) => {
      this.species = this.data.appendIds(data.results);
    })
  }

}
