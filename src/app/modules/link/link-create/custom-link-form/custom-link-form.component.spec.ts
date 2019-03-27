import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomLinkFormComponent } from './custom-link-form.component';

describe('CustomLinkFormComponent', () => {
  let component: CustomLinkFormComponent;
  let fixture: ComponentFixture<CustomLinkFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomLinkFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomLinkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
