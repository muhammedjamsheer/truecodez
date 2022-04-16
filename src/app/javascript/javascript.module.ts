import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrismModule } from '@ngx-prism/core';

import { JavascriptRoutingModule } from './javascript-routing.module';
import { BasicsComponent } from './basics/basics.component';
import { HomeComponent } from './home/home.component';
import { VariablesComponent } from './variables/variables.component';


@NgModule({
  declarations: [BasicsComponent, HomeComponent, VariablesComponent],
  imports: [
    CommonModule,
    PrismModule,
    JavascriptRoutingModule
  ]
})
export class JavascriptModule { }
