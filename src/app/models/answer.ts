export class Answer {
  public get isSelected(): boolean {
    return this._isSelected;
  }

  public get isValid(): boolean {
    return this._isValid;
  }

  public get textAnswer(): string {
    return this._textAnswer;
  }

  public constructor(
    private _textAnswer: string,
    private _isSelected: boolean,
    private _isValid: boolean
  ) {

  }
}