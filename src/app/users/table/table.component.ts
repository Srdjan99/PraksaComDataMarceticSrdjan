import { Component, OnInit } from '@angular/core';
import { User } from '../../models/student.model';
import { UserListService } from '../services/user-list.service';
import { MatDialog } from '@angular/material/dialog';
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
   this.getUsers();
  }

  getUsers(){
    this.usersService.getUsers().subscribe((data: any) => {
      this.users = data.data;
    });
  }

  OnButtonClick(user: User) {
    this.dialog.open(DialogComponent, {
      data: user
    })
  }

}