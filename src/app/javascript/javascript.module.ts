import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrismModule } from '@ngx-prism/core';
import { JavascriptRoutingModule } from './javascript-routing.module';
import { BasicsComponent } from './basics/basics.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InterviewquestionsComponent } from './interviewquestions/interviewquestions.component';


@NgModule({
  declarations: [BasicsComponent, HomeComponent, InterviewquestionsComponent],
  imports: [
    CommonModule,
    JavascriptRoutingModule,
    PrismModule,
    FormsModule
  ]
})
export class JavascriptModule { }
