import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickDayChartComponent } from './click-day-chart.component';

describe('ClickDayChartComponent', () => {
  let component: ClickDayChartComponent;
  let fixture: ComponentFixture<ClickDayChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickDayChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickDayChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
