import { Injectable, Injector, Output } from "@angular/core";
import { Response } from "@angular/http";
import { AuthUrls } from "./urls";
import { map } from "rxjs/operators";
import { BaseService } from "../../base-items/base.service";
import { IUser } from "../../models/user.interface";
import { IRegisterModel } from "../model/register.viewmodel";
import { ILoginModel } from "../model/login.viewmodel";
import { EventEmitter } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthService extends BaseService {
  private userInfo: IUser;
  @Output() updateUserInfo: EventEmitter<IUser>;

  constructor(injector: Injector) {
    super(injector);
    this.updateUserInfo = new EventEmitter<IUser>();
  }
  // login method, it's returning an observable of IUser if login was successful or an error with the result message.
  login(credentials: ILoginModel) {
    return this.post(AuthUrls.login, credentials).pipe(
      map<Response, IUser>(response => {
        const token = response.headers.get("x-new-token");
        // save new token if exists in the response.
        if (token) this.storageService.saveUserInfo({ token }, false);

        // return the response in json format.
        return response.json();
      })
    );
  }

  // register method, it's returning an observable of IUser if register was successful or an error with the result message.
  register(credentials: IRegisterModel) {
    return this.post(AuthUrls.register, credentials).pipe(
      map<Response, IUser>(response => {
        const token = response.headers.get("x-new-token");
        // save new token if exists in the response.
        if (token) this.storageService.saveUserInfo({ token }, false);

        // return the response in json format.
        return response.json();
      })
    );
  }

  // update saved user with new values.
  updateSavedUser(userInfo: IUser, remember: boolean) {
    // get previous user information.
    const savedUserInfo = this.storageService.getSavedUserInfo();
    // add the token if doesn't exist in new information.
    if (!userInfo.token) {
      userInfo.token = savedUserInfo.token;
    }
    // store the information in client system.
    this.storageService.saveUserInfo(userInfo, remember);

    // sync the new information in application.
    this.userInfo = userInfo;
    this.emitUserUpdate();
  }

  // logout the user.
  logout() {
    this.storageService.removeUserInfo();
    this.userInfo = undefined;
    this.emitUserUpdate();
  }

  // return saved user information;
  // TODO: this is not good refactor this to make sense in architecture.
  getSavedUserInfo() {
    return this.storageService.getSavedUserInfo();
  }

  // let the other modules get new user information.
  emitUserUpdate() {
    this.updateUserInfo.emit(this.userInfo);
  }
}
