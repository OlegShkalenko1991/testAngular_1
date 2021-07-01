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

  public constructor() {
    this._questions = [
      new Question("Q", [
        new Answer("1", false, false),
        new Answer("2", false, false),
        new Answer("3", true, false),
        new Answer("4", false, false),
      ]),
      new Question("Q2", [
        new Answer("11", false, false),
        new Answer("22", false, false),
        new Answer("33", false, false),
        new Answer("44", false, false),
      ]),
      new Question("", [
        new Answer("", false, false),
        new Answer("", false, false),
        new Answer("", false, false),
        new Answer("", false, false),
      ]),
      new Question("Q3", [
        new Answer("111", false, false),
        new Answer("222", false, false),
        new Answer("333", false, false),
        new Answer("444", false, false),
      ])
    ]
  }
}
