import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class SystemMessagesService {

  constructor() { }

  getMessages() {
    return Messages;
  }
}

const Messages = {
  "generate-short-link": "کوتاهش کن"
}
