import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMembersViewComponent } from './list-members-view.component';

describe('ListMembersViewComponent', () => {
  let component: ListMembersViewComponent;
  let fixture: ComponentFixture<ListMembersViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMembersViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMembersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
