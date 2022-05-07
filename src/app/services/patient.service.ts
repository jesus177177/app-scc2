import { Patient } from './../core/models/patient';

import { AngularFirestore } from '@angular/fire/compat/firestore';


import { Injectable } from '@angular/core';

@Injectable()
export class PatientService {



    constructor(private db: AngularFirestore) { }

    getPatient() {
        return this.db.collection('pacientes').snapshotChanges()
    }

    getPatientById(id) {
        return this.db
            .collection('pacientes')
            .doc(id)
            .valueChanges();
    }

    createPatient(patient: Patient) {
        return new Promise<any>((resolve, reject) => {
            this.db
                .collection('pacientes')
                .add(patient)
                .then(
                    (response) => {
                        console.log(response);
                    },
                    (error) => reject(error)
                );
        });
    }

    updatePatient(patient: Patient, id) {
        return this.db.collection('pacientes').doc(id).update({
            nombre: patient.nombre,
            apellidos: patient.apellidos,
            direccion: patient.direccion,
            peso: patient.peso,
            fecha: patient.fecha,
            edad: patient.edad,
            talla: patient.talla,
            consultorio: patient.consultorio,
            imc: patient.imc,
            historias: patient.historias
        });
    }

    deletePatient(patient) {
        return this.db
            .collection('pacientes')
            .doc(patient.id)
            .delete();
    }

}