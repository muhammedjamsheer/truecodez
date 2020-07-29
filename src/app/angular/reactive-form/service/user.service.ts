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

  getAllStateList() {  
    return this.http.get(this.url + '/states');  
  }
  getAllLanguageList() {  
    return this.http.get(this.url + '/languages');  
  }    
  createUser(employee){  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post(this.url + '/user',  
    employee, httpOptions);  
  }
}
