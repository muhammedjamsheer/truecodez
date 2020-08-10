import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BasicsComponent } from './basics/basics.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { GridComponent } from './grid/grid.component';


const routes: Routes = [
   { path: '', component: BasicsComponent },
   { path: 'parent', component: ParentComponent },
   { path: 'child', component: ChildComponent },
   { path: 'grid', component: GridComponent },
];

@NgModule({
  declarations: [BasicsComponent, ParentComponent, ChildComponent, GridComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes) ,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class WorkspaceModule { }
