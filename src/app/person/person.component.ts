import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})

export class PersonComponent implements OnInit {

  personId: number;
  person: Object;

  constructor(private data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.personId = params.id;
    })
  }

  ngOnInit() {
    this.data.getPerson(this.personId).subscribe(data => {
      this.person = data;
    })
  }

}
