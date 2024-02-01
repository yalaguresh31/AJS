import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Program4FactorialComponent } from './program4-factorial.component';

describe('Program4FactorialComponent', () => {
  let component: Program4FactorialComponent;
  let fixture: ComponentFixture<Program4FactorialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Program4FactorialComponent]
    });
    fixture = TestBed.createComponent(Program4FactorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
