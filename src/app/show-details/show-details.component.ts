import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  id: any;
  showDetail: any;

  constructor(public route: ActivatedRoute, public movieService: MovieService, private _location: Location) {
  }
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getDetailsShow();
  }
  getDetailsShow() {
    this.movieService.getShowDetails(this.id).subscribe(data => {
      this.showDetail = data;
    });
  }
}
