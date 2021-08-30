import { Component, OnInit } from '@angular/core';
import { User } from '../../models/student.model';
import { UserListService } from '../services/user-list.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../../dialog/dialog.component';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  public users:User[]=[];  
  constructor(private usersService:UserListService,
              private snackBar:MatSnackBar,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((data : any)=>
    {
      this.users=data.data;
      console.log(data);
    },error=>{
      this.users=[];
      console.log(error);
      this.snackBar.open('Greska', 'OK');
    })
  }

  

}
