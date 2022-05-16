import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrismModule } from '@ngx-prism/core';
import { ReactRoutingModule } from './react-routing.module';
import { HomeComponent } from './home/home.component';
import { UsestateComponent } from './usestate/usestate.component';
import { UseeffectComponent } from './useeffect/useeffect.component';
import { RoutingComponent } from './routing/routing.component';
import { PropsComponent } from './props/props.component';


@NgModule({
  declarations: [HomeComponent, UsestateComponent, UseeffectComponent, RoutingComponent, PropsComponent],
  imports: [
    CommonModule,
    ReactRoutingModule,
    PrismModule
  ]
})
export class ReactModule { }
