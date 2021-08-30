import { Injectable } from '@angular/core';
import { User } from '../../models/student.model';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UsersDataResponse } from 'src/app/models/user-data-response.model';
@Injectable({
  providedIn: 'root'
})
export class UserListService {

  private _url:string;

  constructor(private http:HttpClient) {
    this._url=environment.apiUrl;
  }

  getUsers():Observable<UsersDataResponse>{
    return this.http.get<UsersDataResponse>(this._url);
  }

  addUsers(user:User):Observable<UsersDataResponse>{
    return this.http.post<UsersDataResponse>(this._url,user)
  }
}
