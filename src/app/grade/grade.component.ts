import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent implements OnInit {

  tempoAgora = Date.now()

  bimestres = [1, 2, 3, 4]

  // temporário
  alunos = [
    {nome:"Adão Nogueira", notas:[9.89, 8.75, 6.34, 8.05]},
    {nome:"Bruno Tavares", notas:[6.32, 8.25, 7.67, 7.97]},
    {nome:"João da Silva", notas:[5.1, 5.22, 7.33, 8]},
    {nome: "José Queiroz", notas:[9.31, 7.9, 8, 8.832]}
  ]

  constructor() {
  }

  ngOnInit() {
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
