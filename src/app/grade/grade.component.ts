import { Component, OnInit } from '@angular/core';
import { Grade } from './grade';
import { GradesService } from './grades.service';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  providers: [ GradesService ],
  styleUrls: ['./grade.component.css'],
})

export class GradeComponent implements OnInit {

  tempoAgora = Date.now()
  bimestres = [1, 2, 3, 4]
  alunos = []

  constructor(private gradesService: GradesService) {
  }

  ngOnInit() {
    this.getGrades()
  }

  getGrades() {
    this.gradesService.getGrades()
      .subscribe((data: Grade[]) => this.alunos = data)
  }

  getAverage(gradeList) {
    let items=gradeList.length
    let sum=0

    for (let i=0; i<items; i++){
      sum += gradeList[i]
    }
      return sum/items
  }
}
