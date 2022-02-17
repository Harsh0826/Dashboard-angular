import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeestatsComponent } from './employeestats.component';

describe('EmployeestatsComponent', () => {
  let component: EmployeestatsComponent;
  let fixture: ComponentFixture<EmployeestatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeestatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeestatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
