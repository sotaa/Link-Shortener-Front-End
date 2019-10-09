import { Response } from "@angular/http";
import { Injectable, Injector, EventEmitter, Output } from "@angular/core";
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
  links: ILink[];
  alertMessage: string;
  @Output() resetCheckBox: EventEmitter<null>;

  constructor(injector: Injector) {
    super(injector);
    this.resetCheckBox = new EventEmitter();
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

  generateLink(link: ILink): Observable<ILink> {
    return this.post(LinkUrls.create, link).pipe(
      map<Response, ILink>(res => <ILink>res.json())
    );
  }

  updateLink(id, link: ILink): Observable<ILink> {
    return this.put(LinkUrls.update(id), link).pipe(
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

  getUserLink(id) {
    return this.get(LinkUrls.getUserLink(id)).pipe(
      map<Response, ILink>(res => <ILink>res.json())
    );
  }
  deleteUserLink(id) {
    const url = LinkUrls.deleteUserLink(id);
    return this.delete(url);
  }

  resetCustomLink() {
    this.resetCheckBox.emit();
  }
}
