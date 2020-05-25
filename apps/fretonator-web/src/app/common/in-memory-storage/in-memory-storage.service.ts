import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryStorageService {
  localStore: any = {};

  setItem(key: string, value: any) {
    this.localStore[key] = JSON.stringify(value);
  }

  getItem(key: string) {
    const data = this.localStore[key];
    return data ? JSON.parse(data) : undefined;
  }

  removeItem(key: string) {
    delete this.localStore[key];
  }

  clear() {
    this.localStore = {};
  }
}
