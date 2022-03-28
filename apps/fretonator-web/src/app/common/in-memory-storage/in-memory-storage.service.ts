import {Injectable} from '@angular/core';

interface LocalStore {
  [key: string]: string | number | boolean;
}

@Injectable({
  providedIn: 'root',
})
export class InMemoryStorageService {
  localStore: LocalStore = {};

  setItem(key: string, value: string | number | boolean) {
    this.localStore[key] = value;
  }

  getItem(key: string) {
    const data = this.localStore[key];
    return data || undefined;
  }

  removeItem(key: string) {
    delete this.localStore[key];
  }

  clear() {
    this.localStore = {};
  }
}
