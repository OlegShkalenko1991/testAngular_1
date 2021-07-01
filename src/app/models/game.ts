import { Question } from "./question";

export class Game {
  public get question(): Question[] {
    return this._question;
  }
  public set question(value: Question[]) {
    this._question = value;
  }

  private _currentQuestion!: Question;
  public get currentQuestion(): Question {
    return this._currentQuestion;
  }
  public set currentQuestion(value: Question) {
    this._currentQuestion = value;
  }

  private _score!: number;
  public get score(): number {
    return this._score;
  }
  public set score(value: number) {
    this._score = value;
  }

  public constructor(
    private _question: Question[]
  ) {


  }

}
