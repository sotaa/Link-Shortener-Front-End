import { Component, OnInit, Input } from "@angular/core";
import { Chart } from "angular-highcharts";
import { ToChartData } from "../../helpers/make-chart-data.helper";

@Component({
  selector: "app-location-chart",
  templateUrl: "./location-chart.component.html",
  styleUrls: ["./location-chart.component.css"]
})
export class LocationChartComponent implements OnInit {
  chart: Chart;
  @Input() data: any[];

  constructor() {}

  ngOnInit() {
    this.createChart(ToChartData(this.data));
  }

  private createChart(data: { name: string; y: number }[]) {
    this.chart = new Chart({
      chart: {
        animation: true,
        type: "pie",
        margin: 50
      },
      title: {
        text: "کشور ها",
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
          formatter: function() {
            return data[this.value].name;
          }
        }
      }
    });
  }
}
