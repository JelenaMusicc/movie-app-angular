import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrls: ['./shows-list.component.css'],
})
export class ShowsListComponent implements OnInit {
  showsList: any[] = [];
  showDetails: any[];
  
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getTopRatedShows().subscribe(
      (data: any) => {
        this.showsList = data.results;
      });
  }
  getShowDetails(id: number) {
    return this.movieService.getShowDetails(id).subscribe((data: []) => {
      this.showDetails = data;

    });
  }

}


