// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Program1NameComponent } from './program1-name/program1-name.component';
import { Program2ShoppingComponent } from './program2-shopping/program2-shopping.component';
import { Program3CalculatorComponent } from './program3-calculator/program3-calculator.component';
import { Program4FactorialComponent } from './program4-factorial/program4-factorial.component';
import { FormsModule } from '@angular/forms';
import { Program5StudentsComponent } from './program5-students/program5-students.component';
import { Program6TodoComponent } from './program6-todo/program6-todo.component';
// import { Program7CrudComponent } from './program7-crud/program7-crud.component';
// import { Program8LoginComponent } from './program8-login/program8-login.component';
// import { Program9EmployeesComponent } from './program9-employees/program9-employees.component';

@NgModule({
  declarations: [
    AppComponent,
    Program1NameComponent,
    Program2ShoppingComponent,
    Program3CalculatorComponent,
    Program4FactorialComponent,
    Program5StudentsComponent,
    Program6TodoComponent,
    // Program7CrudComponent,
    // Program8LoginComponent,
    // Program9EmployeesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
