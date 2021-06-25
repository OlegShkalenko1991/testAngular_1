import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Answer } from '../models/answer';

@Component({
  selector: 'ims-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {

  @Input()
  public dataAnswer!: Answer;

  @Output()
  public clickEmitter: EventEmitter<Answer>;

  constructor() {
    this.clickEmitter = new EventEmitter();
  }

  ngOnInit(): void {
  }

  public clickHandler(): void{
    this.clickEmitter.emit(this.dataAnswer);
  }

}
