import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Program7CrudComponent } from './program7-crud.component';

describe('Program7CrudComponent', () => {
  let component: Program7CrudComponent;
  let fixture: ComponentFixture<Program7CrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Program7CrudComponent]
    });
    fixture = TestBed.createComponent(Program7CrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
