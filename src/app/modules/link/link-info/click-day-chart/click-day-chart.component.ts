import { Component, OnInit, Input } from "@angular/core";
import { Chart } from "angular-highcharts";
import { ToChartData } from "../../helpers/make-chart-data.helper";

@Component({
  selector: "app-click-day-chart",
  templateUrl: "./click-day-chart.component.html",
  styleUrls: ["./click-day-chart.component.css"]
})
export class ClickDayChartComponent implements OnInit {
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
        type: data.length < 3 ? 'bar' : "line",
        marginTop: 50
      },
      title: {
        text: "تعداد کلیک در روز",
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
