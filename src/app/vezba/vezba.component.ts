import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student.model';
import { ServisService } from 'src/app/vezba/servis/servis.service';
@Component({
  selector: 'app-vezba',
  templateUrl: './vezba.component.html',
  styleUrls: ['./vezba.component.css']
})
export class VezbaComponent implements OnInit {
  selektovani?:Student;
  /*public lista: Student[] = [
    { ime: "Goran", prezime: "Jovanovic", adresa: "Orloviceva 34", slika: '../../assets/images/lik1.jpg', email:"goranj@gmail.com",drzava:"Srbija",grad:"Novi Sad" },
    { ime: "Dragan", prezime: "Dragic", adresa: "Majska 53", slika: '../../assets/images/lik2.jpg', email:"dragan@gmail.com",drzava:"Srbija",grad:"Beograd" },
    { ime: "Jovana", prezime: "Subotic", adresa: "1. Aprila 40A", slika: '../../assets/images/lik3.jpg', email:"jovana@gmail.com",drzava:"Srbija",grad:"Subotica" }
  ]*/

  public students:Student[]=[];
  constructor(private servis:ServisService) { 
    this.students=this.servis.getStudents();
  }

  ngOnInit(): void {
  }

  funk(student:Student){
    this.selektovani=student;
  }
}
