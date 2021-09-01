import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { VezbaComponent } from './vezba/vezba.component';
import { DetaljiStudentComponent } from './detalji-student/detalji-student.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { TableComponent } from './users/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { InterfaceComponent } from './users/interface/interface.component';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { FormsModule } from "@angular/forms";
import { DialogFormComponent } from './dialog-form/dialog-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { TokenInterceptor } from './auth/token.interceptor';
import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    VezbaComponent,
    DetaljiStudentComponent,
    UsersComponent,
    TableComponent,
    InterfaceComponent,
    DialogComponent,
    ListUsersComponent,
    DialogFormComponent,
    DialogDeleteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    AppRoutingModule,
    MatTableModule,

    FlexLayoutModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
