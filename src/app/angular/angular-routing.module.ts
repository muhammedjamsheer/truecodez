import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentprojectionComponent } from './contentprojection/contentprojection.component';
import { EmployeecreateComponent } from './employees/employeecreate/employeecreate.component';
import { EmployeelistComponent } from './employees/employeelist/employeelist.component';
import { EmployeeviewComponent } from './employees/employeeview/employeeview.component';
import { HomeComponent } from './home/home.component';
import { HostbindingComponent } from './hostbinding/hostbinding.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { NgcontainerComponent } from './ngcontainer/ngcontainer.component';
import { RoutingComponent } from './routing/routing.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { DatabindingComponent } from './databinding/databinding.component';


const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: "prefix" },
  { path: 'databinding', component: DatabindingComponent },



  { path: 'home', component: HomeComponent },
  { path: 'lifecyclehooks', component: LifecyclehooksComponent },
  { path: 'viewchild', component: ViewchildComponent },
  { path: 'contentprojection', component: ContentprojectionComponent },
  { path: 'hostbinding', component: HostbindingComponent },
  { path: 'ngContainer', component: NgcontainerComponent },
  { path: 'routing/:id', component: RoutingComponent },
  { path: 'reactiveforms', component: ReactiveformComponent },
  {
    path: 'employees',
    children: [
      {
        path: '',
        component: EmployeelistComponent
      },
      {
        path: 'create',
        component: EmployeecreateComponent
      },
      {
        path: 'view/:id/:name',
        component: EmployeeviewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
