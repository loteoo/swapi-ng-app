import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  vehicleId: number;
  vehicle: Object;

  constructor(private data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.vehicleId = params.id;
    })
  }

  ngOnInit() {
    this.data.getVehicle(this.vehicleId).subscribe(data => {
      this.vehicle = data;
    })
  }

}
