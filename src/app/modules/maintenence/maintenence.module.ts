import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenenceRoutingModule } from './maintenence-routing.module';
import { HomeMaintenenceComponent } from './home-maintenence/home-maintenence.component';


@NgModule({
  declarations: [
    HomeMaintenenceComponent
  ],
  imports: [
    CommonModule,
    MaintenenceRoutingModule
  ]
})
export class MaintenenceModule { }
