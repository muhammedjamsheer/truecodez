import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BasicsComponent } from './basics/basics.component';
import { ParenttochildComponent } from './parenttochild/parenttochild.component';
import { ChildtoparentComponent } from './childtoparent/childtoparent.component';
import { InterviewQuestionsComponent } from './interview-questions/interview-questions.component';
import { SharingdataservicesComponent } from './sharingdataservices/sharingdataservices.component';
import { ToasterNotificationsComponent } from './toaster-notifications/toaster-notifications.component';
import { EmployeeListComponent } from './reactive-form/view/employee-crud/employee-list/employee-list.component';
import { EmployeeRequestComponent } from './reactive-form/view/employee-crud/employee-request/employee-request.component';
import { ReactiveFormTutorialComponent } from './reactive-form/view/reactive-form-tutorial/reactive-form-tutorial.component';
import { JsonserverSaveDataComponent } from './jsonserver-save-data/jsonserver-save-data.component';
import { AngularExportComponent } from './angular-export/angular-export.component';
import { DataSharingComponent } from './data-sharing/data-sharing.component';
import { AngularBasicsComponent } from './angular-basics/angular-basics.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'basics',
    component: AngularBasicsComponent
  },
  {
    path: 'parent-to-child',
    component: ParenttochildComponent
  },
  {
    path: 'child-to-parent',
    component: ChildtoparentComponent
  },
  {
    path: 'interview-questions',
    component: InterviewQuestionsComponent
  },
  {
    path: 'services-sharing-data',
    component: SharingdataservicesComponent
  },
  {
    path: 'toaster-notification',
    component: ToasterNotificationsComponent
  },
  {
    path: 'reactive-form-crud',
    component: EmployeeListComponent
  },
  {
    path: 'employee-request',
    component: EmployeeRequestComponent
  },
  {
    path: 'reactive-form',
    component: ReactiveFormTutorialComponent
  },
  {
    path: 'json-server',
    component: JsonserverSaveDataComponent
  },
  {
    path: 'export',
    component: AngularExportComponent
  },
  {
    path: 'data-sharing',
    component: DataSharingComponent
  }
];

  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
