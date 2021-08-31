import { Component, OnInit,Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from '../models/student.model';
import { UserListService } from '../users/services/user-list.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.css']
})
export class DialogFormComponent implements OnInit {
  user= new User();
  constructor(public service:UserListService,
              @Inject (MAT_DIALOG_DATA) public data:User) { }

  onSubmitTemplateBased() {
    this.createUser();
}

  ngOnInit(): void {
  }

  
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  createUser():void{
    this.service.addUsers(this.user).subscribe((data:any)=>{
      console.log("kreiran korisnik");
    })
  }

}
