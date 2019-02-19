import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnisghingstatusComponent } from './furnisghingstatus.component';

describe('FurnisghingstatusComponent', () => {
  let component: FurnisghingstatusComponent;
  let fixture: ComponentFixture<FurnisghingstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FurnisghingstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FurnisghingstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
