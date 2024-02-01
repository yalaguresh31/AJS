import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Program6TodoComponent } from './program6-todo.component';

describe('Program6TodoComponent', () => {
  let component: Program6TodoComponent;
  let fixture: ComponentFixture<Program6TodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Program6TodoComponent]
    });
    fixture = TestBed.createComponent(Program6TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
