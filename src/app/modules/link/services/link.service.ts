import { Response, Http, Headers } from '@angular/http';
import { Injectable } from "@angular/core";
import { LinkUrls } from "./urls";
import { map } from "rxjs/operators";
import { ILink } from "../../models/link.interface";
import { Observable } from "rxjs";
import { LinkInfo } from '../../models/link-info.interface';

@Injectable({
  providedIn: "root"
})
export class LinkService {
  private headers: Headers;
  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append("Content-Type", "application/json");
  }

  generate(address: string): Observable<ILink> {
    const data = { address };
    return this.http
      .post(LinkUrls.link,data , {headers: this.headers})
      .pipe(map<Response, ILink>(res => <ILink>res.json()));
  }

  getInfo(code: string) {
    const url = LinkUrls.info(code);
    return this.http.get(url).pipe(map<Response, LinkInfo>(res => res.json()));
  }
}
