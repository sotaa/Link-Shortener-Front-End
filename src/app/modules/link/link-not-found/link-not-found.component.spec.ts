import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkNotFoundComponent } from './link-not-found.component';

describe('LinkNotFoundComponent', () => {
  let component: LinkNotFoundComponent;
  let fixture: ComponentFixture<LinkNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
