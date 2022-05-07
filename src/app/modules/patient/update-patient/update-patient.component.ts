import { Component, OnInit } from '@angular/core';

import { PatientService } from 'src/app/services/patient.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {
  public editForm: FormGroup;
  patientRef: any;

  constructor(
    public patientService: PatientService,
    public formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    this.editForm = this.formBuilder.group({
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
    const id = this.activeRoute.snapshot.paramMap.get('id'); 
    this.patientService.getPatientById(id).subscribe(res => {
      this.patientRef = res;
      this.editForm = this.formBuilder.group({
        nombre: [this.patientRef.nombre],
        apellidos: [this.patientRef.apellidos],
        direccion: [this.patientRef.direccion],
        peso: [this.patientRef.peso],
        fecha: [this.patientRef.fecha],
        edad: [this.patientRef.edad],
        talla: [this.patientRef.talla],
        consultorio: [this.patientRef.consultorio],
        imc: [this.patientRef.imc],
        historias: [this.patientRef.historias]
      })
    }) 
  }

  onSubmit() {
    const id = this.activeRoute.snapshot.paramMap.get('id');

    this.patientService.updatePatient(this.editForm.value, id);
    this.router.navigate(['/patient']);
    console.log(this.editForm.value) //podemos ver los valores capturados
  }


}
