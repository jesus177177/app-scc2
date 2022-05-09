import { Dating } from './../core/models/dating';
import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';



@Injectable()
export class DatingService {

  constructor(private db: AngularFirestore) { }

  getDating(){
    return this.db.collection('citas').snapshotChanges()
  }

  getDatingById(id){
    return this.db
      .collection('citas')
      .doc(id)
      .valueChanges()
  }

  createDating(dating: Dating){
    return new Promise<any>((resolve, reject) => {
      this.db
          .collection('citas')
          .add(dating)
          .then(
              (response) => {
                  console.log(response);
              },
              (error) => reject(error)
          );
  });
  }

  updateDating(dating: Dating, id){
    return this.db.collection('citas').doc(id).update({
      nombre: dating.nombre,
      telefono: dating.telefono,
      fecha: dating.fecha,
      hora: dating.hora,
      consultorio: dating.consultorio
    });
  }

  deleteDating(dating){
    return this.db.collection('citas').doc(dating.id).delete();
  }
}
