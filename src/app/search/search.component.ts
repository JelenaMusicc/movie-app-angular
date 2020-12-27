import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  discoverMovies: any;
  isLoadingMovies = false;
  searchText = "";

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) {}

  private searchMovie(searchText: string) {
    this.isLoadingMovies = true;
    this.movieService.searchGetCall(searchText).subscribe((result) => {
      this.isLoadingMovies = false;
      this.discoverMovies = result;
     
    });
  }
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((param) => {
      this.isLoadingMovies = true;
      this.searchText = param.q;
      this.searchMovie(this.searchText);
    });
  }


}