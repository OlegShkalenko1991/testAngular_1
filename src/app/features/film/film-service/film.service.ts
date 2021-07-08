import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { IFilm } from 'src/app/shared/models/film';
import { share } from 'rxjs/operators'

@Injectable()
export class FilmService {

  private readonly BASE_URL = "http://localhost:3000";

  public constructor(private _httpClient: HttpClient) {

  }

  public getFilm(id: number): Observable<IFilm> {
    return this._httpClient.get<IFilm>(`${this.BASE_URL}/film/${id}`).pipe(share());
  }
}
