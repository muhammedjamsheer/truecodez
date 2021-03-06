import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularRoutingModule } from './angular-routing.module';
import { HomeComponent } from './home/home.component';
import { PrismModule } from '@ngx-prism/core';
import { BasicsComponent } from './basics/basics.component';
import { ParenttochildComponent } from './parenttochild/parenttochild.component';
import { ChildtoparentComponent } from './childtoparent/childtoparent.component';
import { FormsModule } from '@angular/forms';
import { InterviewQuestionsComponent } from './interview-questions/interview-questions.component';
import { SharingdataservicesComponent } from './sharingdataservices/sharingdataservices.component';
import { ToasterNotificationsComponent } from './toaster-notifications/toaster-notifications.component';
import { EmployeeListComponent } from './reactive-form/view/employee-crud/employee-list/employee-list.component';
import { EmployeeRequestComponent } from './reactive-form/view/employee-crud/employee-request/employee-request.component';
import { ReactiveFormTutorialComponent } from './reactive-form/view/reactive-form-tutorial/reactive-form-tutorial.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JsonserverSaveDataComponent } from './jsonserver-save-data/jsonserver-save-data.component';
import { AngularExportComponent } from './angular-export/angular-export.component';
import { DataSharingComponent } from './data-sharing/data-sharing.component';
import { AngularBasicsComponent } from './angular-basics/angular-basics.component';

@NgModule({
  declarations: [HomeComponent, BasicsComponent, ParenttochildComponent, ChildtoparentComponent, InterviewQuestionsComponent, SharingdataservicesComponent, ToasterNotificationsComponent, EmployeeListComponent, EmployeeRequestComponent, ReactiveFormTutorialComponent, JsonserverSaveDataComponent, AngularExportComponent, DataSharingComponent, AngularBasicsComponent,],
  imports: [
    CommonModule,
    AngularRoutingModule,
    PrismModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AngularModule { }
