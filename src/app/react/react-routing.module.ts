import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsestateComponent } from './usestate/usestate.component';
import { UseeffectComponent } from './useeffect/useeffect.component';
import { RoutingComponent } from './routing/routing.component';


const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: "prefix" },
  { path: 'home', component: HomeComponent },
  { path: 'usestate', component: UsestateComponent },
  { path: 'useeffect', component: UseeffectComponent },
  { path: 'routing', component: RoutingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactRoutingModule { }
