import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  codes: any = [];
  constructor() { }

  ngOnInit() {
    this.getsamplecodes();
  }
  getsamplecodes() {
this.codes.createproject = `
ng new EmployeeApp
cd EmployeeApp
ng s --open --poll=2000`;
  this.codes.appmodule = `
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
    
import { AppComponent } from './app.component';
    
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
      // import HttpClientModule after BrowserModule.
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
`;
this.codes.jsonserver = `npm install Json-server`;
this.codes.jsondata = `{
"students": [
    {
      "id": 1,
      "name": "Enola Rowe",
      "class": "tony@mcu.com",
      "address": "131 Oswaldo Street"
    },{
      "id": 2,
      "name": "Timmothy Lueilwitz",
      "age": "15",
      "address": "37137 Abbigail Lock"
    },{
      "id": 3,
      "name": "Madilyn Pacocha",
      "age": "14",
      "address": "094 Morris Plains"
    },{
      "id": 4,
      "name": "Harley Cremin",
      "age": "17",
      "address": "14855 Cathy Square"
    },{
      "id": 5,
      "name": "Juana Ziemann",
      "age": "16",
      "address": "612 Dayana Stream"
    }
  ]
}`;
this.codes.jsondatanpm= `json-server --watch API/data.json`;
this.codes.jsonserverrun= `npm run json:server`;
  }
}
