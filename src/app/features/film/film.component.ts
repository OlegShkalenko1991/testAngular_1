import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IFilm } from 'src/app/shared/models/film';
import { FilmService } from './film-service/film.service';
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'ims-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  private _film$!: Observable<IFilm>;
  public get film$(): Observable<IFilm> {
    return this._film$;
  }

  public constructor(private _route: ActivatedRoute, private _filmService: FilmService) {

  }

  ngOnInit(): void {
    let id = Number(this._route.snapshot.paramMap.get('id'));
    this._film$ = this._filmService.getFilm(id);
  }

}
