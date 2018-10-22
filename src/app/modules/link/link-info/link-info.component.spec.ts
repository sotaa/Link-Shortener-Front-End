import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkInfoComponent } from './link-info.component';

describe('LinkInfoComponent', () => {
  let component: LinkInfoComponent;
  let fixture: ComponentFixture<LinkInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
