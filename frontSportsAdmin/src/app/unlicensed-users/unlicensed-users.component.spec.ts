import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlicensedUsersComponent } from './unlicensed-users.component';

describe('UnlicensedUsersComponent', () => {
  let component: UnlicensedUsersComponent;
  let fixture: ComponentFixture<UnlicensedUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnlicensedUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnlicensedUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
