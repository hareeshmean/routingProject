import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MandelsComponent } from './mandels.component';

describe('MandelsComponent', () => {
  let component: MandelsComponent;
  let fixture: ComponentFixture<MandelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MandelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MandelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
