import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/student.model';
import { UserListService } from '../services/user-list.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../../dialog/dialog.component';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  selektovani?: User;
  users: User[] = [];
  displayedColumns = ['id', 'name', 'email', 'gender', 'status'];
  constructor(private usersService: UserListService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((data: any) => {
      this.users = data.data;
      console.log(data);
    });
  }
  /*funk(users: User) {
    this.selektovani = users;
  }*/

  OnButtonClick(user:User){
    this.dialog.open(DialogComponent,{      
      data:user
    })
  }


  /*public pageSlice=this.users.slice(0,3);
  OnPageChange(event:PageEvent){
    const startIndex=event.pageIndex*event.pageSize;
    let endIndex=startIndex+event.pageSize;
    if(endIndex>this.users.length){
      endIndex=this.users.length;
    }
    this.pageSlice=this.users.slice(startIndex,endIndex);
  }*/
  
  /*public dataSource = new MatTableDataSource<User[]>();

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }*/
}