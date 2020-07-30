import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jsonserver-save-data',
  templateUrl: './jsonserver-save-data.component.html',
  styleUrls: ['./jsonserver-save-data.component.scss']
})
export class JsonserverSaveDataComponent implements OnInit {
  codes: any = [];
  constructor() { }

  ngOnInit() {
    this.getsamplecodes();
  }
  getsamplecodes() {

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
this.codes.jsondatanpm= `json-server --watch db.json`;
this.codes.jsondatanpm2= `
"scripts": {
  "ng": "ng",
  "start": "ng serve",
  "build": "ng build",
  "json:server": "json-server --watch db.json",
  "test": "ng test",
  "lint": "ng lint",
  "e2e": "ng e2e"
},`;
this.codes.jsonserverrun= `npm run json:server`;
  }
}
