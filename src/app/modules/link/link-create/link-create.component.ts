import { Component, OnInit } from '@angular/core';
import { LinkService } from '../services/link.service';
import { ILink } from '../../models/link.interface';
import { SystemMessagesService } from '../services/system-messages.service';

@Component({
  selector: 'app-link-create',
  templateUrl: './link-create.component.html',
  styleUrls: ['./link-create.component.css']
})
export class LinkCreateComponent implements OnInit {
  link: ILink;
  messages;
  linkAddress: string;
  address: string;

  constructor(private linkService: LinkService, msgService: SystemMessagesService) {
    this.messages = msgService.getMessages();
  }

  ngOnInit() {
  }

  generate() {
    this.linkService.generate(this.address)
    .subscribe(link => {
      this.link = link;
     this.linkAddress = window.location.href.concat(link.shorten);
    });
  }

  copyToClipBoard() {
    const str = this.linkAddress.slice();
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert('کپی شد')
  }

}
