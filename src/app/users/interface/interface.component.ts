import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogFormComponent } from 'src/app/dialog-form/dialog-form.component';
import { User } from '../../models/student.model';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent {
  @Input() user?: User;
  constructor(public dialog: MatDialog) { }

  onButtonClick() {
    this.dialog.open(DialogFormComponent, {
      data: this.user
    })
  }

}
