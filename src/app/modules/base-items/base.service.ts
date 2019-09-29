import { Http , Headers} from "@angular/http";
import { Injector } from "@angular/core";
import { StorageService } from "./storage.service";

export abstract class BaseService {

  protected headers: Headers;
  protected requestOptions: any;
  private http: Http;
  protected storageService: StorageService;

 constructor(injector: Injector ) {
    this.headers = new Headers();
    this.http = injector.get(Http);
    this.storageService = injector.get(StorageService);
    this.headers.append("Content-Type", "application/json");
    this.appendAuthToken();
    this.requestOptions = {headers: this.headers };
  }

  // send Http POST request.
  protected post(url , body) {
    return this.http.post(url , body , this.requestOptions);
  }

  // send Http GET request.
  protected get(url) {
    return this.http.get(url, this.requestOptions);
  }


  // send Http PUT request.
  protected put(url , body) {
    return this.http.put(url,body , this.requestOptions);
  }

  // send Http DELETE request.
  protected delete(url) {
    return this.http.delete(url, this.requestOptions);
  }

  // send HTTP HEAD request.
  protected head(url) {
    return this.http.head(url , this.requestOptions);
  }

  // append token to header.
  private appendAuthToken() {
   const userInfo = this.storageService.getSavedUserInfo();
   if(userInfo) this.headers.append('Authorization', userInfo.token);
  }
}
