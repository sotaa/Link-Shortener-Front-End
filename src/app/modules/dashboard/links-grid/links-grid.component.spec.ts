import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksGridComponent } from './links-grid.component';

describe('LinksGridComponent', () => {
  let component: LinksGridComponent;
  let fixture: ComponentFixture<LinksGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinksGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
