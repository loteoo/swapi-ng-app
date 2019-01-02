import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  loading: Boolean;
  people: Array;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.loading = true;
    this.data.getPeople().subscribe(data => {
      this.loading = false;
      this.people = data.results;
    })
  }

}
