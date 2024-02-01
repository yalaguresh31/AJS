import { Component } from '@angular/core';

@Component({
  selector: 'app-program3-calculator',
  templateUrl: './program3-calculator.component.html',
  styleUrls: ['./program3-calculator.component.css']
})
export class Program3CalculatorComponent {
  public result: number = 0;
  public num1: number = 0;
  public num2: number = 0;
  componentTitle:string ="Program #3 - Calculator";
  add(): void {
    this.result = this.num1 + this.num2;
  }
  subtract(): void {
    this.result = this.num1 - this.num2;
  }
  multiply(): void {
    this.result = this.num1 * this.num2;
  }
  divide(): void {
    if (this.num2 !== 0) {
      this.result = this.num1 / this.num2;
    } 
    else {
      alert('Cannot divide by zero!');
    }
  }
}
