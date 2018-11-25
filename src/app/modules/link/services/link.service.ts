import { Response } from '@angular/http';
import { Injectable, Injector } from "@angular/core";
import { LinkUrls } from "./urls";
import { map } from "rxjs/operators";
import { ILink } from "../../models/link.interface";
import { Observable } from "rxjs";
import { LinkInfo } from '../../models/link-info.interface';
import { BaseService } from '../../base-items/base.service';

@Injectable({
  providedIn: "root"
})
export class LinkService extends BaseService{

constructor(injector: Injector) {
  super(injector);
}

  generate(address: string): Observable<ILink> {
    const data = { address };
    return this.post(LinkUrls.link,data)
      .pipe(map<Response, ILink>(res => <ILink>res.json()));
  }

  getInfo(code: string) {
    const url = LinkUrls.info(code);
    return this.get(url).pipe(map<Response, LinkInfo>(res => res.json()));
  }
}
