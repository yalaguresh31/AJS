// program1-name.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-program1-name',
  templateUrl: './program1-name.component.html',
  styleUrls: ['./program1-name.component.css']
})
export class Program1NameComponent {
  firstName: string = 'Vijay';
  lastName: string = 'Kumar';
  fullName: string = '';
  componentTitle: string = 'Program #1 - Full Name';
  ngOnInit(): void {
   this.updateFullName();
  }
  updateFullName(): void {
    this.fullName = this.firstName +" "+ this.lastName;
  }
}
