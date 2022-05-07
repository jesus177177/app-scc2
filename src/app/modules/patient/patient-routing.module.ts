import { NewPatientComponent } from './new-patient/new-patient.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePatientComponent } from './home-patient/home-patient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';



const routes: Routes = [
  {
    path: '',
    component: HomePatientComponent
  },
  {
    path: 'new',
    component: NewPatientComponent
  },
  {
    path: 'edit/:id',
    component: UpdatePatientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
