import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../models/game';
import { Question } from '../models/question';

@Component({
  selector: 'ims-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @Input()
  public gameData!: Array<Question>;

  private _game!: Game;
  public get game(): Game {
    return this._game;
  }

  private _currentQuestionIndex!: number

  constructor() { }

  ngOnInit(): void {
    this._game = new Game(this.gameData)
    this.startGame();
  }

  public clickNextQuestionHandler(): void {
    this.checkAnswer();
  }

  private startGame(): void {
    this._game.score = 0;
    this._currentQuestionIndex = 0;
    this._game.currentQuestion = this._game.question[this._currentQuestionIndex];
  }

  private endGame(): void {

  }

  private checkAnswer(): boolean {
    this._game.currentQuestion.answers.forEach(answer => {
      if (answer.isSelected) {
        if (answer.isValid) {
          this._game.score++;
          this.getNextQuestion();
        }
        else {
          this.endGame();
        }
      }
    });

    return true;
  }

  public getNextQuestion(): void {
    try {
      this._currentQuestionIndex++;
      this._game.currentQuestion = this._game.question[this._currentQuestionIndex];
    }
    catch (error) {
      console.error('Index out of range');
    }
  }
}
