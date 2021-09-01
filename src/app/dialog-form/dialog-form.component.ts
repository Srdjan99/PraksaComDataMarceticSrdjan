import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from '../models/student.model';
import { UserListService } from '../users/services/user-list.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersDataResponse } from '../models/user-data-response.model';

@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.css']
})
export class DialogFormComponent implements OnInit {
  user: User;
  isUser: boolean;
  constructor(public service: UserListService,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private dialogRef: MatDialogRef<DialogFormComponent>

  ) {
    this.isUser = data ? true : false;
    this.user = data ? Object.assign({}, data) : new User();
  }

  onSubmitTemplateBased() {
    this.isUser ? this.editUser() : this.createUser();
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

  createUser() {
    this.service.addUsers(this.user).subscribe((data: UsersDataResponse) => {
      console.log("kreiran korisnik");
    })
  }

  editUser() {
    console.log("nastavlja");
    this.service.editUsers(this.user).subscribe((data: UsersDataResponse) => {
      this.dialogRef.close(this.user);
      console.log("Edituje");
    })
  }

}
