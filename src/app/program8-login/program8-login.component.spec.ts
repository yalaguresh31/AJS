import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Program8LoginComponent } from './program8-login.component';

describe('Program8LoginComponent', () => {
  let component: Program8LoginComponent;
  let fixture: ComponentFixture<Program8LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Program8LoginComponent]
    });
    fixture = TestBed.createComponent(Program8LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
