import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationChartComponent } from './location-chart.component';

describe('LocationChartComponent', () => {
  let component: LocationChartComponent;
  let fixture: ComponentFixture<LocationChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
