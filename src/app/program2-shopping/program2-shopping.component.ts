import { Component } from '@angular/core';

@Component({
  selector: 'app-program2-shopping',
  templateUrl: './program2-shopping.component.html',
  styleUrls: ['./program2-shopping.component.css']
})
export class Program2ShoppingComponent {
  items: string[] = ['Angular Paperback','Node JS TextBook','Spring Boot Book'];
  newItem: string = '';
  componentTitle:string ="Program #2 Shopping List";
  addItem(item: string): void {
  this.items.push(item);
  this.newItem = '';
  }
  removeItem(index: number): void {
    this.items.splice(index, 1);
  }
}
