import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformsChartComponent } from './platforms-chart.component';

describe('PlatformsChartComponent', () => {
  let component: PlatformsChartComponent;
  let fixture: ComponentFixture<PlatformsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatformsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
