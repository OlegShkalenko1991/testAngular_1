import { Component } from '@angular/core';

@Component({
  selector: 'ims-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public arrButtonsState:boolean[][] =
  [
    [true, true, true, true],
    [true, true, true, true],
    [true, true, true, true],
    [true, true, true, true]
  ];

  public arrButtonsColor:string[] = ['red','orange', 'yellow', 'green'];

  toggleHandler(x:number, y:number) {
    this.arrButtonsState[x][y]= !this.arrButtonsState[x][y];
  }

  setColor(row:number){
    return this.arrButtonsColor[row];
  }
}
