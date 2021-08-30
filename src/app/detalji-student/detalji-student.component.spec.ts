import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaljiStudentComponent } from './detalji-student.component';

describe('DetaljiStudentComponent', () => {
  let component: DetaljiStudentComponent;
  let fixture: ComponentFixture<DetaljiStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaljiStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaljiStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
