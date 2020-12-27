import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MovieService } from './movie.service';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { ShowsListComponent } from './shows-list/shows-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SearchComponent } from './search/search.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MoviesListComponent,
    ShowsListComponent,
    MovieDetailsComponent,
    ShowDetailsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: MoviesListComponent },
      { path: 'movies', component: MoviesListComponent },
      { path: 'shows', component: ShowsListComponent },
      { path: 'movie-details/:id', component: MovieDetailsComponent },
      { path: 'show-details/:id', component: ShowDetailsComponent },
      { path: 'search', component: SearchComponent }
    ])
  ],
  providers: [
    MovieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
