import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/student.model';
import { UserListService } from './services/user-list.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';
import { DialogFormComponent } from '../dialog-form/dialog-form.component';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input() user: User;
  
  selektovani?:User;
  public users:User[]=[];  
  constructor(private usersService:UserListService,
              private snackBar:MatSnackBar,
              public dialog: MatDialog) { }
  

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((data : any)=>
    {
      this.users=data.data;
     // console.log(data);
    },error=>{
      this.users=[];
      console.log(error);
      this.snackBar.open('Greska', 'OK');
    })
    
  }

  

  OnButtonClick(){
    this.dialog.open(DialogComponent,{      
      data:this.user
    })
  }
  OnButtonDelete(): void{
    console.log("Pokusava");
    this.dialog.open(DialogDeleteComponent,{      
      data:this.user
    })
   /* this.usersService.deleteUsers(this.user.id).subscribe((data:any)=>{
      console.log("Brise");
    })*/
  }

  OnButtonEdit():void{
    this.dialog.open(DialogFormComponent,{      
      data:this.user
    })
  }
 
}
