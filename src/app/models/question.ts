import { Answer } from "./answer";

export class Question {

  public get answers(): Answer[] {
    return this._answers;
  }

  public get textQuestion(): string {
    return this._textQuestion;
  }

  public constructor(
    private _textQuestion: string,
    private _answers: Answer[],

  ) {

  }

}
