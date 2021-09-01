import { Component, OnInit, Input, Output } from '@angular/core';
import { User } from '../models/student.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';
import { DialogFormComponent } from '../dialog-form/dialog-form.component';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  @Input() user: User;
  @Output() changeUser = new EventEmitter();

  selektovani?: User;
  public users: User[] = [];
  constructor(
    public dialog: MatDialog) { }

  OnButtonClick() {
    this.dialog.open(DialogComponent, {
      data: this.user
    })
  }

  OnButtonDelete(): void {
    this.dialog.open(DialogDeleteComponent, {
      data: this.user
    }).afterClosed().subscribe((user: User) => {
      if (user) {
        this.changeUser.emit();
      }
    });
  }

  OnButtonEdit(): void {
    this.dialog.open(DialogFormComponent, {
      data: this.user
    }).afterClosed().subscribe((user: User) => {
      if (user) {
        this.changeUser.emit();
      }
    })
  }

}
