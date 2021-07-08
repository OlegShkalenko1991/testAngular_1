import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IFilms } from 'src/app/shared/models/films';
import { FilmsService } from './films-service/films.service';

@Component({
  selector: 'ims-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent {

  private _films$: Observable<Array<IFilms>>;
  public get films$(): Observable<Array<IFilms>> {
    return this._films$;
  }

  public constructor(filmsService: FilmsService) {
    this._films$ = filmsService.getFilms();
  }

  public getLink(film: IFilms): string {
    return `/films/${film.id}`;
  }
}
