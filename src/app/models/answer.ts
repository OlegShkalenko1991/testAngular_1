export class Answer {
  public set isSelected(value: boolean) {
    this._isSelected = value;
  }
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
    private _isValid: boolean,
    private _isSelected: boolean
  ) {

  }
}
