import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Program3CalculatorComponent } from './program3-calculator.component';

describe('Program3CalculatorComponent', () => {
  let component: Program3CalculatorComponent;
  let fixture: ComponentFixture<Program3CalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Program3CalculatorComponent]
    });
    fixture = TestBed.createComponent(Program3CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
