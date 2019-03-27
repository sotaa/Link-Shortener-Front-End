import { Component, OnInit, Input } from '@angular/core';
import { ILink } from 'src/app/modules/models/link.interface';

@Component({
  selector: 'app-deep-link-form',
  templateUrl: './deep-link-form.component.html',
  styleUrls: ['./deep-link-form.component.css']
})
export class DeepLinkFormComponent implements OnInit {

  @Input() link: ILink;

  constructor() { }

  ngOnInit() {
  }

  save() {

  }

}
