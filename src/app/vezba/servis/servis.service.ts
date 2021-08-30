import { Injectable } from '@angular/core';
import { Student } from '../../models/student.model';


@Injectable({
  providedIn: 'root'
})
export class ServisService {
  private students:Student[];
  constructor() {
    this.students=[
      new Student('Goran',  'Jovanovic',  'Orloviceva 34', '../../assets/images/lik1.jpg', 'goranj@gmail.com','Srbija','Novi Sad'),
      new Student( "Dragan",  "Dragic",  "Majska 53",  '../../assets/images/lik2.jpg', "dragan@gmail.com","Srbija","Beograd"),
      new Student( "Jovana",  "Subotic", "1. Aprila 40A",  '../../assets/images/lik3.jpg', "jovana@gmail.com","Srbija","Subotica")
    ];
   }

   public getStudents(): Student[]{
     return this.students;
   }
}

