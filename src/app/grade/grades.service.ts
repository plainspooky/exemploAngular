import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Grade } from './grade';

@Injectable({
  providedIn: 'root'
})

export class GradesService {

  private gradesUrl = 'assets/grades.json';

  constructor(private http: HttpClient) {
  }

  public getGrades() {
    return this.http.get<Grade[]>(this.gradesUrl);
  }
}
