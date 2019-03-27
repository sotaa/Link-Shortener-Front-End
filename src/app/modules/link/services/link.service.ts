import { Response } from "@angular/http";
import { Injectable, Injector } from "@angular/core";
import { LinkUrls } from "./urls";
import { map } from "rxjs/operators";
import { ILink } from "../../models/link.interface";
import { Observable, Subscriber } from "rxjs";
import { LinkInfo } from "../../models/link-info.interface";
import { BaseService } from "../../base-items/base.service";

@Injectable({
  providedIn: "root"
})
export class LinkService extends BaseService {

  constructor(injector: Injector) {
    super(injector);
  }

  shortenIsExists(selectedShorten: string) {
    return new Observable<boolean>(observer => {
     this.head(LinkUrls.info(selectedShorten)).subscribe(
        res => {
          observer.next(res.ok);
          observer.complete();
        },
        err => {
          observer.next(false);
          observer.complete();
        }
      );
    });
  }

  generate(link: ILink): Observable<ILink> {
    return this.post(LinkUrls.create, link).pipe(
      map<Response, ILink>(res => <ILink>res.json())
    );
  }

  getInfo(code: string) {
    const url = LinkUrls.info(code);
    return this.get(url).pipe(map<Response, LinkInfo>(res => res.json()));
  }

  getUserLinks() {
    return this.get(LinkUrls.getUserLinks).pipe(
      map<Response, ILink[]>(res => res.json())
    );
  }
}
