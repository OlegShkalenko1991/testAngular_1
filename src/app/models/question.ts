import { Answer } from "./answer";

export class Question {
  public get answer(): Answer {
    return this._answer;
  }

  public get textQuestion(): string {
    return this._textQuestion;
  }

  public constructor(
    private _textQuestion: string,
    private _answer: Answer
  ) {

  }

}
