import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss']
})
export class EmployeelistComponent implements OnInit {
  employees:any[]=[
    { Id:1,Name:"Jamsheer",Place:"Pattambi"},
    { Id:2,Name:"Haniya",Place:"Aloor"},
    { Id:3,Name:"Thafseer",Place:"Kannur"},
    { Id:4,Name:"Safa",Place:"Karakuth"},
   
  ]
  constructor() { }

  ngOnInit() {
  }

}
