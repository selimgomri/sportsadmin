import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutUserComponent } from './ajout-user.component';

describe('AjoutUserComponent', () => {
  let component: AjoutUserComponent;
  let fixture: ComponentFixture<AjoutUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
