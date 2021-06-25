import { Component, OnInit } from '@angular/core';
import { Answer } from '../models/answer';

@Component({
  selector: 'ims-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public clickHandler(answer: Answer): void{

  }

}
