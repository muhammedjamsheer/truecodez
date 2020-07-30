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

  }
}
