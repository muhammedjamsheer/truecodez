import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BasicsComponent } from './basics/basics.component';
import { InterviewquestionsComponent } from './interviewquestions/interviewquestions.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'basics', component: BasicsComponent },
  { path: 'interviewQuestions', component: InterviewquestionsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavascriptRoutingModule { }
