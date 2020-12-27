import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  PARAMS = new HttpParams();
  private readonly youtubeSearchEndpoint = `https://www.googleapis.com/youtube/v3/search?key=${environment.youtubeApiKey}&maxResults=10&part=snippet`;

  constructor(private http: HttpClient) { }

  getTopRatedMovies() {
    return this.http.get(
      environment.baseURL + 'movie/top_rated?api_key=' + environment.apiKey
    );
  }
  getTopRatedShows() {
    return this.http.get(
      environment.baseURL + 'tv/top_rated?api_key=' + environment.apiKey
    );
  }
  getMovieDetail(id: number): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=` + environment.apiKey
    );
  }
  getShowDetails(id: number): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=` + environment.apiKey
    );
  }
  searchGetCall(term: string) {
    return this.http.get(environment.baseURL + 'search/multi?api_key='
      + environment.apiKey + '&language=en-US', { params: this.PARAMS.set('query', term) });
  }

  getYoutubeVideoId(searchText: string): Promise<JSON> {
    var youtubeSearchVideoUrl = `${this.youtubeSearchEndpoint}&q=${searchText} official trailer`;

    return this.http.get<JSON>(youtubeSearchVideoUrl).toPromise();
  }
}


