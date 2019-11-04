import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkResultPrivateComponent } from './link-result-private.component';

describe('LinkResultPrivateComponent', () => {
  let component: LinkResultPrivateComponent;
  let fixture: ComponentFixture<LinkResultPrivateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkResultPrivateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkResultPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
