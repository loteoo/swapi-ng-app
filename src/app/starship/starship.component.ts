import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent implements OnInit {

  starshipId: number;
  starship: Object;

  constructor(private data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.starshipId = params.id;
    })
  }

  ngOnInit() {
    this.data.getPerson(this.starshipId).subscribe(data => {
      this.starship = data;
    })
  }

}
