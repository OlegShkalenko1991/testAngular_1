import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../models/question';

@Component({
  selector: 'ims-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input()
  public dataQuestion!: Question;

  constructor() { }

  ngOnInit(): void {
  }

}
