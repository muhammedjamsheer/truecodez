import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularRoutingModule } from './angular-routing.module';
import { HomeComponent } from './home/home.component';
import { PrismModule } from '@ngx-prism/core';
import { BasicsComponent } from './basics/basics.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { ParenttochildComponent } from './parenttochild/parenttochild.component';
import { ChildtoparentComponent } from './childtoparent/childtoparent.component';
import { FormsModule } from '@angular/forms';
import { InterviewQuestionsComponent } from './interview-questions/interview-questions.component';
import { SharingdataservicesComponent } from './sharingdataservices/sharingdataservices.component';
import { ToasterNotificationsComponent } from './toaster-notifications/toaster-notifications.component';
@NgModule({
  declarations: [HomeComponent, BasicsComponent, ChildComponent, ParentComponent, ParenttochildComponent, ChildtoparentComponent, InterviewQuestionsComponent, SharingdataservicesComponent, ToasterNotificationsComponent],
  imports: [
    CommonModule,
    AngularRoutingModule,
    PrismModule,
    FormsModule
  ]
})
export class AngularModule { }
