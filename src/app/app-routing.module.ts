import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FILM_PATH } from './features/film';
import { FILMS_PATH } from './features/films';

const routes: Routes = [
  {
    path: FILMS_PATH,
    loadChildren: () => import('./features/films/films.module')
      .then(m => m.FilmsModule)
  },
  {
    path: FILM_PATH,
    loadChildren: () => import('./features/film/film.module')
      .then(m => m.FilmModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

