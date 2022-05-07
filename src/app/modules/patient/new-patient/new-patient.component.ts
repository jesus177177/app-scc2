import { PatientService } from 'src/app/services/patient.service';
import { Component, OnInit } from '@angular/core';
//importamos los modulos para formularios
import { FormBuilder, FormGroup } from '@angular/forms';
//importamos el enrutador
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.css']
})
export class NewPatientComponent implements OnInit {
  public patientForm:FormGroup;

  constructor(
    public patientService: PatientService,
    public formBuilder:FormBuilder,
    public router:Router
  ) { 
    this.patientForm = this.formBuilder.group({
      nombre: [''],
      apellidos: [''],
      direccion: [''],
      peso: [''],
      fecha: [''],
      edad: [''],
      talla: [''],
      consultorio: [''],
      imc: [''],
      historias: ['']
    })
  }

  
  ngOnInit(): void {
  }

  onSubmit(){
    this.patientService.createPatient(this.patientForm.value)
    this.router.navigate(['patient'])
  }

}
