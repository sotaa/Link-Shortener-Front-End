import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStartComponent } from './dashboard-start.component';

describe('DashboardStartComponent', () => {
  let component: DashboardStartComponent;
  let fixture: ComponentFixture<DashboardStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
