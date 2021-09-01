import { Component, OnInit } from '@angular/core';
import { User } from '../../models/student.model';
import { UserListService } from '../services/user-list.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../dialog/dialog.component';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  selektovani?: User;
  users: User[] = [];
  displayedColumns = ['id', 'name', 'email', 'gender', 'status'];
  searchValue:string="";
  search$: Subject<string>=new Subject();// specijalni tip observable koji dobija vrednost

  constructor(private usersService: UserListService,
    public dialog: MatDialog) {
      this.onSearch();
     }

  ngOnInit(): void {
   this.getUsers();
  }

  getUsers(){
    this.usersService.getUsers(this.searchValue).subscribe((data: any) => {
      this.users = data.data;
    });
  }

  OnButtonClick(user: User) {
    this.dialog.open(DialogComponent, {
      data: user
    })
  }

  private onSearch(){
    this.search$.pipe(
      debounceTime(500)
    ).subscribe(
      (value:String)=>{
        this.getUsers();
      }      
    );
  }
}