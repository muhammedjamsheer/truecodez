import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { State } from '../domain/state';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getAllStateList() {
    return this.http.get(this.url + '/states');
  }
  getAllLanguageList() {
    return this.http.get(this.url + '/languages');
  }
  getAllUserList() {
    return this.http.get(this.url + '/users');
  }
  createUser(user) {
    return this.http.post(this.url + '/users', user, this.httpOptions);
  }
  updateUser(id,user) {
    return this.http.put(this.url + '/users/'+id, user, this.httpOptions);
  }
  getUserDetails(id) {
    return this.http.get(this.url + '/users/' + id);
  }
  deleteUser(id) {
    return this.http.delete(this.url + '/users/' + id);
  }
}
