import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtmFormComponent } from './utm-form.component';

describe('UtmFormComponent', () => {
  let component: UtmFormComponent;
  let fixture: ComponentFixture<UtmFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtmFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtmFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
