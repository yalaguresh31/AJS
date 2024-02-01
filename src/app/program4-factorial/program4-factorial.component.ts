import { Component } from '@angular/core';

@Component({
  selector: 'app-program4-factorial',
  templateUrl: './program4-factorial.component.html',
  styleUrls: ['./program4-factorial.component.css']
})
export class Program4FactorialComponent {
  inputNumber: number = 0;
  factorialResult: number = 0;
  squareResult: number = 0;
  componentTitle: string = "Program #4 - Factorial and Square";
  calculateFactorial() {
    if (this.inputNumber >= 0) {
      this.factorialResult = this.factorial(this.inputNumber);
    } 
    else {
      this.factorialResult = 0;
    }
  }
  calculateSquare() {
    this.squareResult = Math.pow(this.inputNumber, 2);
  }
  factorial(n: number): number {
    if (n === 0 || n === 1) {
      return 1;
    } 
    else {
      return n * this.factorial(n - 1);
    }
  }
} 
