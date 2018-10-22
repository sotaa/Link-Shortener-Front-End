import { Component, OnInit, Input } from '@angular/core';
import { ToChartData } from '../../helpers/make-chart-data.helper';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-browser-chart',
  templateUrl: './browser-chart.component.html',
  styleUrls: ['./browser-chart.component.css']
})
export class BrowserChartComponent implements OnInit {
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
        type: "bar",
        marginTop: 50
      },
      title: {
        text: "مرورگرها",
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
