import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicsComponent } from './basics/basics.component';
import { HomeComponent } from './home/home.component';
import { VariablesComponent } from './variables/variables.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  // { path: 'whereto', component: BasicsComponent },
  // { path: 'output', component: BasicsComponent },

  // { path: 'syntax', component: BasicsComponent },
  // { path: 'comments', component: BasicsComponent },
  // { path: 'variables', component: VariablesComponent },

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
        path:'syntax', component: BasicsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavascriptRoutingModule { }
