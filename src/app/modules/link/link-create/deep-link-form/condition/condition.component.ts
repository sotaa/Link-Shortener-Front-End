import { Component, OnInit, Input } from '@angular/core';
import { ICondition , UserAgent } from 'src/app/modules/models/link.interface';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.css']
})
export class ConditionComponent implements OnInit {

  @Input() condition: ICondition;

  address: string;
  platform: UserAgent;

  constructor() { }

  ngOnInit() {
  }

}
