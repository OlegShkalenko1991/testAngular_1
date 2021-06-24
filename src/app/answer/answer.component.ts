import { Component, Input, OnInit } from '@angular/core';
import { Answer } from '../models/answer';

@Component({
  selector: 'ims-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {

  @Input()
  public dataAnswer!: Answer;

  constructor() { }

  ngOnInit(): void {
  }

}
