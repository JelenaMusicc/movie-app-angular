import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchInput: any;

  constructor(private movieService: MovieService, private router: Router) { }

  getTopRatedMovies() {
    return this.movieService.getTopRatedMovies();
  }
  getTopRatedShows() {
    return this.movieService.getTopRatedShows();
  }
   public onSearchClick() {
    this.router.navigate(['/search'], { queryParams: { q: this.searchInput } });
  }

  ngOnInit() {
    
  }
  
}