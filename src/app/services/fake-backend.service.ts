import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeBackendService implements InMemoryDbService {

  constructor() { }

  createDb(reqInfo: RequestInfo): { [key: string]: any } | Observable<{ [key: string]: any }> | Promise<{ [key: string]: any }> {
    const items = [
      { name: 'Home', route: '/' },
      { name: 'About', route: '/about' },
      { name: 'Contact', route: '/contact' }
    ];
    return { items };
  }


}
