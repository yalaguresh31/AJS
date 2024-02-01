import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Program1NameComponent } from './program1-name.component';

describe('Program1NameComponent', () => {
  let component: Program1NameComponent;
  let fixture: ComponentFixture<Program1NameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Program1NameComponent]
    });
    fixture = TestBed.createComponent(Program1NameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
