import { Question } from "./question";

export class Game {
  public get question(): Question[] {
    return this._question;
  }
  public set question(value: Question[]) {
    this._question = value;
  }

  public constructor(
    private _question: Question[]
    ) {


  }

}
