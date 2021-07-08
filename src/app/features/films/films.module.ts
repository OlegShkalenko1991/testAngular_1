import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule, FILMS_ROUTING_COMPONENTS } from './films-routing.module';
import { FilmsService } from './films-service/films.service';


@NgModule({
  declarations: [
    FILMS_ROUTING_COMPONENTS,
  ],
  providers: [
    FilmsService
  ],
  imports: [
    CommonModule,
    FilmsRoutingModule
  ]
})
export class FilmsModule { }
