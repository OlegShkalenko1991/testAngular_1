import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmRoutingModule, FILM_ROUTING_COMPONENTS } from './film-routing.module';
import { FilmService } from './film-service/film.service';


@NgModule({
  declarations: [
    FILM_ROUTING_COMPONENTS,
  ],
  providers: [
    FilmService
  ],
  imports: [
    CommonModule,
    FilmRoutingModule
  ]
})
export class FilmModule { }
