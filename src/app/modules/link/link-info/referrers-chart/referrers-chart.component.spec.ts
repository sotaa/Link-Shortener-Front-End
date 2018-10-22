import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferrersChartComponent } from './referrers-chart.component';

describe('ReferrersChartComponent', () => {
  let component: ReferrersChartComponent;
  let fixture: ComponentFixture<ReferrersChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferrersChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferrersChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
