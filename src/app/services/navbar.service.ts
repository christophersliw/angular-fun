import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private http = inject(HttpClient);


  constructor() { }

  getMenuItems() : Observable<any[]> {
    return this.http.get<any[]>('api/items');
  }



}
