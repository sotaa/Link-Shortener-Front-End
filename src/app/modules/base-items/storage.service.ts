import { Injectable } from "@angular/core";
import { IUser } from "../models/user.interface";

@Injectable({
  providedIn: "root"
})
export class StorageService {
 private userInfo: IUser;

  constructor() {}

  // save userInfo
  saveUserInfo(userInfo: IUser, remember: boolean) {
    const strUI = JSON.stringify(userInfo);
    if (remember) {
      localStorage.setItem("userInfo", strUI);
    } else {
      sessionStorage.setItem("userInfo", strUI);
    }
  }

  // retrieve saved userInfo.
  getSavedUserInfo() {
    if (this.userInfo) return this.userInfo;
    // check localStorage.
    let userInfo = localStorage.getItem("userInfo");
    if (!userInfo) {
      // check sessionStorage.
      userInfo = sessionStorage.getItem("userInfo");
    }

    if(userInfo) this.userInfo = JSON.parse(userInfo);

    return this.userInfo;
  }

  removeUserInfo() {
    localStorage.removeItem('userInfo');
    sessionStorage.removeItem('userInfo');
    this.userInfo = undefined;
  }
}
