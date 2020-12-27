import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { Location } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { IMovieDetail } from '../movie-detail.interface';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  id: any;
  public movieDetail: IMovieDetail;
  public isLoadingMovie = true;
  public videoUrl: any;
  
  constructor(public route: ActivatedRoute, public movieService: MovieService, private _location: Location, private _domSanitizer: DomSanitizer) {

  }
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getDetails();
  }
  getDetails() {
    this.movieService.getMovieDetail(this.id).subscribe(data => {
      this.movieDetail = data;
      this.getYoutubeVideoId();
    });
  }
  private getYoutubeVideoId(){
    this.movieService.getYoutubeVideoId(this.movieDetail.title).then((result) => {
      var jsonResult: any = result;
      var youtubeVideo = `https://www.youtube.com/embed/${jsonResult.items[0].id.videoId}?&autoplay=1`
      this.videoUrl = this._domSanitizer.bypassSecurityTrustResourceUrl(youtubeVideo);
      this.isLoadingMovie = false;
    });
  } 

}
