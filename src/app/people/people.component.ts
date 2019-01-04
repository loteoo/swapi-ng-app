import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { SwapiCollection } from '../swapi-collection';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people: Array<Object> = [];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getPeople().subscribe((data: SwapiCollection) => {
      this.people = this.data.appendIds(data.results);
    })
  }

}
