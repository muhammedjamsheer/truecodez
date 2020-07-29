import { Component, OnInit } from '@angular/core';
import { NotificationService } from './../services/notification.service'
@Component({
  selector: 'app-toaster-notifications',
  templateUrl: './toaster-notifications.component.html',
  styleUrls: ['./toaster-notifications.component.scss']
})
export class ToasterNotificationsComponent implements OnInit {
  code1: any;
  code2: any;
  code3: any;
  code4: any;
  code5: any;
  code6: any;
  code7: any;
  constructor(private notifyService : NotificationService) { }
  
  showToasterSuccess(){
      this.notifyService.showSuccess("Data shown successfully !!", "ItSolutionStuff.com")
  }
  
  showToasterError(){
      this.notifyService.showError("Something is wrong", "ItSolutionStuff.com")
  }
  
  showToasterInfo(){
      this.notifyService.showInfo("This is info", "ItSolutionStuff.com")
  }
  
  showToasterWarning(){
      this.notifyService.showWarning("This is warning", "ItSolutionStuff.com")
  }

  ngOnInit() {
    this.getsamplecodes();
  }
  getsamplecodes() {
    this.code1 = `
  npm install ngx-toastr@11.3.3  
  `;
    this.code2 = `
  npm install @angular/animations --save
  `;
    this.code3 = `
.....
  "styles": [
    "node_modules/ngx-toastr/toastr.css",
    "src/styles.css"
  ],
.....
  `;
    this.code4 = `
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
  
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
  
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
    `;

    this.code5 = `
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  
  constructor(private toastr: ToastrService) { }
  
  showSuccess(message, title){
      this.toastr.success(message, title)
  }
  showError(message, title){
      this.toastr.error(message, title)
  }
  showInfo(message, title){
      this.toastr.info(message, title)
  }
  showWarning(message, title){
      this.toastr.warning(message, title)
  } 
}
        `;
    this.code6 = `
<button (click)="showToasterSuccess()">
    Success Toaster
</button>
  
<button (click)="showToasterError()">
    Error Toaster
</button>
  
<button (click)="showToasterInfo()">
    Info Toaster
</button>
  
<button (click)="showToasterWarning()">
    Warning Toaster
</button>
        `;
    this.code7 = `
import { Component } from '@angular/core';

import { NotificationService } from './notification.service'
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private notifyService : NotificationService) { }
  
  showToasterSuccess(){
      this.notifyService.showSuccess("Data shown successfully !!", "ItSolutionStuff.com")
  }
  
  showToasterError(){
      this.notifyService.showError("Something is wrong", "ItSolutionStuff.com")
  }
  
  showToasterInfo(){
      this.notifyService.showInfo("This is info", "ItSolutionStuff.com")
  }
  
  showToasterWarning(){
      this.notifyService.showWarning("This is warning", "ItSolutionStuff.com")
  }
}
 `;

  }

}
