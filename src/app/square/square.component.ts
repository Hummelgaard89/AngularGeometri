import { Component } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent {
  side!: number;
  squareCircumference!: number;
  squareArea!: number;

  SquareCalculate(){
    if(!this.side){
      alert('You need to input a number in')
    }
    else if(this.side){
      this.squareCircumference = this.side * 4;
      this.squareArea = this.side * 2;
    }
  }
}
