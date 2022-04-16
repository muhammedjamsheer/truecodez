import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private menus = new BehaviorSubject([]);
  sharedMessage = this.menus.asObservable();

  constructor() { }

  nextMessage(array: any) {
    this.menus.next(array)
  }
}
