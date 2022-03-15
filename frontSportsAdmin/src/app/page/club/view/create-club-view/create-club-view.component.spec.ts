import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClubViewComponent } from './create-club-view.component';

describe('CreateClubViewComponent', () => {
  let component: CreateClubViewComponent;
  let fixture: ComponentFixture<CreateClubViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateClubViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateClubViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
