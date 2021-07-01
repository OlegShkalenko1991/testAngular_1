import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Answer } from '../models/answer';
import { Question } from '../models/question';

@Component({
  selector: 'ims-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input()
  public dataQuestion!: Question;

  @Output()
  public clickEmitter: EventEmitter<number>;

  constructor() {
    this.clickEmitter = new EventEmitter();
  }

  ngOnInit(): void {
  }

  public clickAnswerHandler(answer: Answer): void {

    this.clearSelectionAnswer();
    answer.isSelected = true;

  }

  private clearSelectionAnswer(): void {
    this.dataQuestion.answers.forEach(answer => {
      answer.isSelected = false;
    })
  }
}
