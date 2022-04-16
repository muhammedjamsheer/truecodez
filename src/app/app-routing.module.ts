import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'angular',
    loadChildren: () => import('./angular/angular.module').then(m => m.AngularModule)
  },
  {
    path: 'javascript',
    loadChildren: () => import('./javascript/javascript.module').then(m => m.JavascriptModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
