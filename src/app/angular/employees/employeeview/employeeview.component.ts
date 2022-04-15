import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-employeeview',
  templateUrl: './employeeview.component.html',
  styleUrls: ['./employeeview.component.scss']
})
export class EmployeeviewComponent implements OnInit {
Id:number;
Name:string;
  constructor(private _Activatedroute:ActivatedRoute) { }

  ngOnInit() {
    this.Id=this._Activatedroute.snapshot.params.id;
    this.Name=this._Activatedroute.snapshot.params.name;
    debugger;
  }

}
