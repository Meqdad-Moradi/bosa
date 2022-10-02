import { ISideNavAction } from './../interfaces/side-nave';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SideNavActionService {
  constructor(private http: HttpClient) {}

  renderData(): Observable<ISideNavAction[]> {
    return this.http.get<ISideNavAction[]>('../assets/side-nav-action.json');
  }
}
