import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkPasswordComponent } from './link-password.component';

describe('LinkPasswordComponent', () => {
  let component: LinkPasswordComponent;
  let fixture: ComponentFixture<LinkPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
