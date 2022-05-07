import { Patient } from './../../../core/models/patient';
import { PatientService } from './../../../services/patient.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-patient',
  templateUrl: './home-patient.component.html',
  styleUrls: ['./home-patient.component.css']
})
export class HomePatientComponent implements OnInit {

  patients: Patient[];

  constructor(private patientService: PatientService) { }

  ngOnInit() {
     this.patientService.getPatient().subscribe( (res) => {
        this.patients = res.map((e) => {
          return {
            id: e.payload.doc.id,
            ... (e.payload.doc.data() as Patient),
          }
        })
     })
  }

}
