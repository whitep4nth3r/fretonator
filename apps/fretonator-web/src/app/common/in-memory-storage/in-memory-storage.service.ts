import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryStorageService {
  localStore: any = {};

  constructor() {
  }


  setItem(key: string, value: any) {
    console.log(key, value);
    this.localStore[key] = value;
  }

  getItem(key: string) {
    console.log('get')
    return this.localStore[key];
  }

  removeItem(key: string) {
    delete this.localStore[key];
  }

  clear() {
    this.localStore = {};
  }
}
