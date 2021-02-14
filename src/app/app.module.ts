import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './search/search.component';

import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';



import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MoviesService} from './movies.service';
import { MovieComponent } from './movie/movie.component'


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeaderComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule
    ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
