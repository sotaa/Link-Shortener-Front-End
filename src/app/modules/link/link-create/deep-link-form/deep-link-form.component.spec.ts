import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepLinkFormComponent } from './deep-link-form.component';

describe('DeepLinkFormComponent', () => {
  let component: DeepLinkFormComponent;
  let fixture: ComponentFixture<DeepLinkFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeepLinkFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeepLinkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
