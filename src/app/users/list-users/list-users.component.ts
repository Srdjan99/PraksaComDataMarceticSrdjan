import { Component, OnInit } from '@angular/core';
import { User } from '../../models/student.model';
import { UserListService } from '../services/user-list.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users: User[] = [];
  constructor(private usersService: UserListService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.callUsers();
  }

  callUsers() {
    this.usersService.getUsers().subscribe((data: any) => {
      this.users = data.data;
    }, error => {
      this.users = [];
      this.snackBar.open('Greska', 'OK');
    })
  }

}
