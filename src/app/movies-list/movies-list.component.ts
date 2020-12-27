import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {

  movieList: any[] = [];
  movieDetails: any[];
  
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getTopRatedMovies().subscribe(
      (data: any) => {
        this.movieList = data.results;
      });
  }
  getMovieDetails(id: number) {
    return this.movieService.getMovieDetail(id).subscribe((data: []) => {
      this.movieDetails = data;
    });
  }
  
 
}


