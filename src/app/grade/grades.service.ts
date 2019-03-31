import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GradesService {

  constructor() {
  }

 public getGrades () {
   return [{nome:"Adão Nogueira",
            notas:[9.89, 8.75, 6.34, 8.05]}]
 }
}
