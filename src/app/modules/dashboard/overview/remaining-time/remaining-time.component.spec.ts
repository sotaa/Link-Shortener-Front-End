import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemainingTimeComponent } from './remaining-time.component';

describe('RemainingTimeComponent', () => {
  let component: RemainingTimeComponent;
  let fixture: ComponentFixture<RemainingTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemainingTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemainingTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
