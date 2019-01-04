import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { SwapiCollection } from '../swapi-collection';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehicles: Array<Object>;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getVehicles().subscribe((data: SwapiCollection) => {
      this.vehicles = this.data.appendIds(data.results);
    })
  }
}
