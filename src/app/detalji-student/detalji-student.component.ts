import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../models/student.model';
import { User } from '../models/student.model';


@Component({
  selector: 'app-detalji-student',
  templateUrl: './detalji-student.component.html',
  styleUrls: ['./detalji-student.component.css']
})
export class DetaljiStudentComponent {

  @Input() studentDet?: Student;
  @Input() userDet?: User;

  constructor() { }

  ngOnInit(): void {
  }


}


