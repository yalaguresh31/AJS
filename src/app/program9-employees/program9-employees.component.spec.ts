import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Program9EmployeesComponent } from './program9-employees.component';

describe('Program9EmployeesComponent', () => {
  let component: Program9EmployeesComponent;
  let fixture: ComponentFixture<Program9EmployeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Program9EmployeesComponent]
    });
    fixture = TestBed.createComponent(Program9EmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
