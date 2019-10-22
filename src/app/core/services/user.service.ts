import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User;
  users: User[];
  constructor(
    private http: HttpClient
  ) { }

  prueba() {
    console.log(2);
  }

  getAllUsers() {
    return this.http.get(`${environment.url_api}/users`);
  }

  getUser(id: number) {
    return this.http.get(`${environment.url_api}/users/${id}`);
  }

  postUser(user: User) {
    return this.http.post(`${environment.url_api}/users`, user);
  }

  deleteUser(id: number) {
    return this.http.delete(`${environment.url_api}/users/${id}`);
  }
}
