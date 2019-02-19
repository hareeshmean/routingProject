import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistricsComponent } from './districs.component';

describe('DistricsComponent', () => {
  let component: DistricsComponent;
  let fixture: ComponentFixture<DistricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistricsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
