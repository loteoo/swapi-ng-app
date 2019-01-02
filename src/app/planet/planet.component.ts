import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {

  planetId: number;
  planet: Object;

  constructor(private data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.planetId = params.id;
    })
  }

  ngOnInit() {
    this.data.getPerson(this.planetId).subscribe(data => {
      this.planet = data;
    })
  }

}
