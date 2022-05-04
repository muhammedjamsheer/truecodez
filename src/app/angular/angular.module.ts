import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrismModule } from '@ngx-prism/core';
import { AngularRoutingModule } from './angular-routing.module';
import { HomeComponent } from './home/home.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { ContentprojectionComponent } from './contentprojection/contentprojection.component';
import { HostbindingComponent } from './hostbinding/hostbinding.component';
import { NgcontainerComponent } from './ngcontainer/ngcontainer.component';
import { RoutingComponent } from './routing/routing.component';
import { EmployeelistComponent } from './employees/employeelist/employeelist.component';
import { EmployeecreateComponent } from './employees/employeecreate/employeecreate.component';
import { EmployeeviewComponent } from './employees/employeeview/employeeview.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { DatabindingComponent } from './databinding/databinding.component';


@NgModule({
  declarations: [HomeComponent, LifecyclehooksComponent, ViewchildComponent, ContentprojectionComponent, HostbindingComponent, NgcontainerComponent, RoutingComponent, EmployeelistComponent, EmployeecreateComponent, EmployeeviewComponent, ReactiveformComponent, DatabindingComponent],
  imports: [
    CommonModule,
    AngularRoutingModule,
    PrismModule
  ]
})
export class AngularModule { }
