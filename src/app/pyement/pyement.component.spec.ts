import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PyementComponent } from './pyement.component';

describe('PyementComponent', () => {
  let component: PyementComponent;
  let fixture: ComponentFixture<PyementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PyementComponent]
    });
    fixture = TestBed.createComponent(PyementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
