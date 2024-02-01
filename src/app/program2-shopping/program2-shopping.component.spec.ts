import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Program2ShoppingComponent } from './program2-shopping.component';

describe('Program2ShoppingComponent', () => {
  let component: Program2ShoppingComponent;
  let fixture: ComponentFixture<Program2ShoppingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Program2ShoppingComponent]
    });
    fixture = TestBed.createComponent(Program2ShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
