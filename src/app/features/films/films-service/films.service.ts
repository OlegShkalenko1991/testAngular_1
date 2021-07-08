import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { IFilms } from 'src/app/shared/models/films';

@Injectable()
export class FilmsService {

  private readonly BASE_URL = "http://localhost:3000";

  public constructor(private _httpClient: HttpClient) {

  }

  public getFilms(): Observable<Array<IFilms>> {
    return this._httpClient.get<Array<IFilms>>(`${this.BASE_URL}/films`)
  }
}
