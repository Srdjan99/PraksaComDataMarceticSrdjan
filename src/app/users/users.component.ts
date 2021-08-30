import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/student.model';
import { UserListService } from './services/user-list.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input() user?: User;

  selektovani?:User;
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

  /*OnButtonClick(users:User){
    this.selektovani=users;
  }*/

  /*OnButtonClick(user:User){
    this.dialog.open(DialogComponent,{      
      data:user
    })
  }*/

  OnButtonClick(){
    this.dialog.open(DialogComponent,{      
      data:this.user
    })
  }


 /* openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverview, {
      data: this.users
    });

  }*/

}
