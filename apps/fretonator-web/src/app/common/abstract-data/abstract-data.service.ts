import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {LocalStorageService} from '../local-storage/local-storage.service';
import {InMemoryStorageService} from '../in-memory-storage/in-memory-storage.service';
import {isPlatformBrowser} from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AbstractDataService {
  service = isPlatformBrowser(this.platformId)
    ? this.localStorageService
    : this.inMemoryService;

  constructor(private localStorageService: LocalStorageService,
    private inMemoryService: InMemoryStorageService,
    @Inject(PLATFORM_ID) private platformId: string,
  ) {
  }


  setItem(key: string, value: string | number | boolean) {
    return this.service.setItem(key, value);
  }

  getItem(key: string) {
    return this.service.getItem(key);
  }

  removeItem(key: string) {
    return this.service.removeItem(key);
  }

  clear() {
    return this.service.clear();
  }
}
