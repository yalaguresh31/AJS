import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Program5StudentsComponent } from './program5-students.component';

describe('Program5StudentsComponent', () => {
  let component: Program5StudentsComponent;
  let fixture: ComponentFixture<Program5StudentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Program5StudentsComponent]
    });
    fixture = TestBed.createComponent(Program5StudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
