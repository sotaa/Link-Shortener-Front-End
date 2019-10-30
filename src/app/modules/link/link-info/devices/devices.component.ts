import { Component, OnInit, Input } from "@angular/core";
import { ToChartData } from "../../helpers/make-chart-data.helper";
import { Chart } from "angular-highcharts";
import { AuthService } from "src/app/modules/auth/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-devices",
  templateUrl: "./devices.component.html",
  styleUrls: ["./devices.component.css"]
})
export class DevicesComponent implements OnInit {
  chart: Chart;
  @Input() data: any[];
  @Input() userIsExpired: boolean;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.createChart(ToChartData(this.data));
  }
  private createChart(data: { name: string; y: number }[]) {
    this.chart = new Chart({
      chart: {
        animation: true,
        type: "pie",
        marginTop: 50
      },
      title: {
        text: "دستگاه ها",
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

  goToPermium() {
    const userLocalStorage = this.authService.getSavedUserInfo();
    if (!userLocalStorage) {
      this.router.navigate(["/login"]);
    }
    this.router.navigate(["/dashboard/link/plans"]);
  }
}
