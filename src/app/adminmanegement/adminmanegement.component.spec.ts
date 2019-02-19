import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmanegementComponent } from './adminmanegement.component';

describe('AdminmanegementComponent', () => {
  let component: AdminmanegementComponent;
  let fixture: ComponentFixture<AdminmanegementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminmanegementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminmanegementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
