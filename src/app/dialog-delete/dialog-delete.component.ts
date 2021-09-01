import { Component, OnInit, Inject } from '@angular/core';
import { User } from '../models/student.model';
import { UserListService } from '../users/services/user-list.service';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css']
})
export class DialogDeleteComponent implements OnInit {
  constructor(private usersService: UserListService,
             @Inject (MAT_DIALOG_DATA) public user:User,
             private dialogRef: MatDialogRef<DialogDeleteComponent>) { }

  ngOnInit(): void {
  }


  delete(): void {
    console.log("Valjda");
    this.usersService.deleteUsers(this.user.id).subscribe((data: any) => {
      this.dialogRef.close(this.user);
      console.log("Brise");
    })
  }
}
