import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehicles: Array;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getVehicles().subscribe(data => {
      this.vehicles = data.results;
    })
  }
}
