import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  planets: Array;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getPlanets().subscribe(data => {
      this.planets = this.data.appendIds(data.results);
    })
  }

}
