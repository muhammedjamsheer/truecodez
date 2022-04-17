import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicsComponent } from './basics/basics.component';
import { HomeComponent } from './home/home.component';
import { VariablesComponent } from './variables/variables.component';
import { StringComponent } from './string/string.component';

const routes: Routes = [
  {
    path:'', 
    component: HomeComponent,
    children: [
      {
        path:'whereto', component: BasicsComponent
      },
      {
        path:'comments', component: BasicsComponent
      },
      {
        path:'variables', component: VariablesComponent
      },
      {
        path:'datatypes', component: VariablesComponent
      },
      {
        path:'string', component: StringComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavascriptRoutingModule { }
