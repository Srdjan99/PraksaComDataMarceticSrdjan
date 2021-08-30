import { Component, OnInit, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogFormComponent } from 'src/app/dialog-form/dialog-form.component';
import { User } from '../../models/student.model';
@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {
  @Input() user?: User;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    
  }

  OnButtonClick(){
    this.dialog.open(DialogFormComponent,{      
      data:this.user
    })
  }

}
