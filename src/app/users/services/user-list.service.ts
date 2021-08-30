import { Injectable } from '@angular/core';
import { User } from '../../models/student.model';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserListService {

  private _url:string;

  constructor(private http:HttpClient) {
    this._url=environment.apiUrl;
  }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this._url);
  }
}
