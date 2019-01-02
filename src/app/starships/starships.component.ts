import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  starships: Array;

  constructor(private data: DataService) { }
  
  ngOnInit() {
    this.data.getStarships().subscribe(data => {
      this.starships = data.results;
    })
  }

}
