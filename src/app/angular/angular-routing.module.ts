import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BasicsComponent } from './basics/basics.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { ParenttochildComponent } from './parenttochild/parenttochild.component';
import { ChildtoparentComponent } from './childtoparent/childtoparent.component';
import { InterviewQuestionsComponent } from './interview-questions/interview-questions.component';
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
  }
];

  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
