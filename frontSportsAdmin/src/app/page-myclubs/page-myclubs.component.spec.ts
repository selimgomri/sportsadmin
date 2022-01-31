import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMyclubsComponent } from './page-myclubs.component';

describe('PageMyclubsComponent', () => {
  let component: PageMyclubsComponent;
  let fixture: ComponentFixture<PageMyclubsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMyclubsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMyclubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
