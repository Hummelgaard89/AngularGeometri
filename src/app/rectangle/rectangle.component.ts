import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {
  sideA!: number;
  sideB!: number;
  rectangleCircumference!: number; 
  rectangleArea!: number;

  
RectangleCalculate()
{
  if(!this.sideA! || !this.sideB){
    alert('You need to input a number in both side A and side B')
    
  }
  else if(this.sideA && this.sideB){
    this.rectangleCircumference = 2*(this.sideA + this.sideB);
    this.rectangleArea = (this.sideA * this.sideB)  
  }
}
}


