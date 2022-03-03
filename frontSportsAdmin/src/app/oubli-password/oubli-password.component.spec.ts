import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OubliPasswordComponent } from './oubli-password.component';

describe('OubliPasswordComponent', () => {
  let component: OubliPasswordComponent;
  let fixture: ComponentFixture<OubliPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OubliPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OubliPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
