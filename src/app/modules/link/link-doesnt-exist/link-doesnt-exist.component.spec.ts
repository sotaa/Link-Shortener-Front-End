import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkDoesntExistComponent } from './link-doesnt-exist.component';

describe('LinkDoesntExistComponent', () => {
  let component: LinkDoesntExistComponent;
  let fixture: ComponentFixture<LinkDoesntExistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkDoesntExistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkDoesntExistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
