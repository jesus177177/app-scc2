import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { HomePatientComponent } from './home-patient/home-patient.component';
import { PatientService } from 'src/app/services/patient.service';
import { NewPatientComponent } from './new-patient/new-patient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomePatientComponent,
    NewPatientComponent,
    UpdatePatientComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[PatientService]
})
export class PatientModule { }
