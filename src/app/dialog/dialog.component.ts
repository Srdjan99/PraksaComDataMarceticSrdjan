import { Component, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { User } from '../models/student.model';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent  {

  @Input() userDet?: User;

  constructor(@Inject (MAT_DIALOG_DATA) public data:User) { }
}
//proveriti sta je koja klasa i da l se koriste obe

export class DialogOverview {

  constructor(
    public dialogRef: MatDialogRef<DialogOverview>,
    @Inject(MAT_DIALOG_DATA) public data: User) {}

}
