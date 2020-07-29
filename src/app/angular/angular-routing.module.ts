import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BasicsComponent } from './basics/basics.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { ParenttochildComponent } from './parenttochild/parenttochild.component';
import { ChildtoparentComponent } from './childtoparent/childtoparent.component';
import { InterviewQuestionsComponent } from './interview-questions/interview-questions.component';
import { SharingdataservicesComponent } from './sharingdataservices/sharingdataservices.component';
import { ToasterNotificationsComponent } from './toaster-notifications/toaster-notifications.component';
import { EmployeeListComponent } from './reactive-form/view/employee-crud/employee-list/employee-list.component';
import { ReactiveFormTutorialComponent } from './reactive-form/view/reactive-form-tutorial/reactive-form-tutorial.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'basics',
    component: BasicsComponent
  },
  {
    path: 'child',
    component: ChildComponent
  },
  {
    path: 'parent',
    component: ParentComponent
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
    path: 'reactive-form',
    component: ReactiveFormTutorialComponent
  }
];

  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
