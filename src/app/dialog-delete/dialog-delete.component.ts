import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from '../models/student.model';
import { UserListService } from '../users/services/user-list.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css']
})
export class DialogDeleteComponent implements OnInit {
  constructor(private usersService: UserListService,
             @Inject (MAT_DIALOG_DATA) public user:User) { }

  ngOnInit(): void {
  }


  delete(): void {
    console.log("Valjda");
    this.usersService.deleteUsers(this.user.id).subscribe((data: any) => {
      console.log("Brise");
    })
  }
}
