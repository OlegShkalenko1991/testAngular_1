import { Component } from '@angular/core';
import { Answer } from './models/answer';
import { Game } from './models/game';
import { Question } from './models/question';

@Component({
  selector: 'ims-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private _questions!: Array<Question>;

  public get questions(): Array<Question> {
    return this._questions;
  }
  public set questions(value: Array<Question>) {
    this._questions = value;
  }

  private _game: Game;

  public constructor() {
    this._questions = [
      new Question("", [
        new Answer("", false, false),
        new Answer("", false, false),
        new Answer("", false, false),
        new Answer("", false, false),
      ]),
      new Question("", [
        new Answer("", false, false),
        new Answer("", false, false),
        new Answer("", false, false),
        new Answer("", false, false),
      ]),
      new Question("", [
        new Answer("", false, false),
        new Answer("", false, false),
        new Answer("", false, false),
        new Answer("", false, false),
      ]),
      new Question("", [
        new Answer("", false, false),
        new Answer("", false, false),
        new Answer("", false, false),
        new Answer("", false, false),
      ])
    ]
    this._game = new Game(this._questions)
  }
}
