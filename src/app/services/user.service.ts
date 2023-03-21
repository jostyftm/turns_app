import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {IUser} from '../interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  endpoint: String = `${environment.apiUrl}/users`;

  constructor(
    private clientHttp: HttpClient
  ) { }

  getAll(): Observable<IUser[]>{
    return this.clientHttp.get<IUser[]>(`${this.endpoint}`);
  }

  getUser(id:string): Observable<IUser> {
    return this.clientHttp.get<IUser>(`${this.endpoint}/${id}`)
  }

  updateUser(id: string, user: any): Observable<any> {
    return this.clientHttp.put<IUser>(`${this.endpoint}/${id}`, user);
  }

  saveUser(user: any): Observable<IUser>{
    return this.clientHttp.post<IUser>(`${this.endpoint}`, user);
  }

  deleteUser(id: string): Observable<any> {
    return this.clientHttp.delete(`${this.endpoint}/${id}`);
  }
}
