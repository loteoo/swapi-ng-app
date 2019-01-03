import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-specie',
  templateUrl: './specie.component.html',
  styleUrls: ['./specie.component.css']
})
export class SpecieComponent implements OnInit {

  specieId: number;
  specie: Object;

  constructor(private data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.specieId = params.id;
    })
  }

  ngOnInit() {
    this.data.getSpecie(this.specieId).subscribe(data => {
      this.specie = data;
    })
  }

}
