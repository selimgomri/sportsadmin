import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProfileViewComponent } from './create-profile-view.component';

describe('CreateProfileViewComponent', () => {
  let component: CreateProfileViewComponent;
  let fixture: ComponentFixture<CreateProfileViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProfileViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProfileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
