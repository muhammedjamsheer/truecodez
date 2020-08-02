import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }

  getAllDistricts() {
    return this.http.get(this.url + '/districts',this.httpOptions);
  }
  getAllEmployees() {
    return this.http.get(this.url + '/employees');
  }
  createEmployee(employee) {
    return this.http.post(this.url + '/employees', employee, this.httpOptions);
  }
  deleteEmployee(id) {
    return this.http.delete(this.url + '/employees/' + id);
  }
  getEmployeeDetails(id) {
    return this.http.get(this.url + '/employees/' + id);
  }
  updateEmployee(id, employee) {
    return this.http.put(this.url + '/employees/' + id, employee, this.httpOptions);
  }
}
