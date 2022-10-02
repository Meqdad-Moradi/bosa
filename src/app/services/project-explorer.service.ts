import { Observable } from 'rxjs';
import { IProjectExplorer } from './../interfaces/IProjectExplorer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectExplorerService {
  constructor(private http: HttpClient) {}

  renderData(): Observable<IProjectExplorer[]> {
    return this.http.get<IProjectExplorer[]>('../assets/project-explorer.json');
  }
}
