import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people: Array;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getPeople().subscribe(data => {
      this.people = data.results;
    })
  }

}
