import { Component, OnInit, Input } from '@angular/core';
import { ToChartData } from '../../helpers/make-chart-data.helper';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-platforms-chart',
  templateUrl: './platforms-chart.component.html',
  styleUrls: ['./platforms-chart.component.css']
})
export class PlatformsChartComponent implements OnInit {
  chart: Chart;
  @Input() data: any[];

  constructor() {}

  ngOnInit() {
    this.createChart(ToChartData(this.data));
  }

  private createChart(data: { name: string; y: number; }[]) {
    this.chart = new Chart({
      chart: {
        animation: true,
        type: "pie",
        margin: 50
      },
      title: {
        text: "سیستم های عامل",
        floating: true
      },
      series: [
        {
          name: " ",
          data: data
        }
      ],
      xAxis: {
        tickInterval: 1,
        labels: {
          formatter: function () {
            return data[this.value].name;
          }
        }
      }
    });
  }
}
