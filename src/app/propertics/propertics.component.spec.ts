import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProperticsComponent } from './propertics.component';

describe('ProperticsComponent', () => {
  let component: ProperticsComponent;
  let fixture: ComponentFixture<ProperticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProperticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProperticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
