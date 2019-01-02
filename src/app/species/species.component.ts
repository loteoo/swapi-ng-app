import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

  species: Array;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getSpecies().subscribe(data => {
      this.species = data.results;
    })
  }

}
