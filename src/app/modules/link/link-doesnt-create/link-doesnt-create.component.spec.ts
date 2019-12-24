import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkDoesntCreateComponent } from './link-doesnt-create.component';

describe('LinkDoesntCreateComponent', () => {
  let component: LinkDoesntCreateComponent;
  let fixture: ComponentFixture<LinkDoesntCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkDoesntCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkDoesntCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
