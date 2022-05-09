import { Component, OnInit } from '@angular/core';

import { DatingService } from 'src/app/services/dating.service';
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-dating',
  templateUrl: './update-dating.component.html',
  styleUrls: ['./update-dating.component.css']
})
export class UpdateDatingComponent implements OnInit {
  updateForm: FormGroup
  datingRef: any

  constructor(
    public datingService: DatingService,
    public formBuilder: FormBuilder,
    private act: ActivatedRoute,
    private router: Router
  ) {
    this.updateForm = this.formBuilder.group({
      nombre: [''],
      telefono: [''],
      fecha: [''],
      hora: [''],
      consultorio: ['']
    })
  }

  ngOnInit(): void {
    const id = this.act.snapshot.paramMap.get('id');

    this.datingService.getDatingById(id).subscribe(res => {
      this.datingRef = res;
      this.updateForm = this.formBuilder.group({
        nombre: [this.datingRef.nombre],
        telefono: [this.datingRef.telefono],
        fecha: [this.datingRef.fecha],
        hora: [this.datingRef.hora],
        consultorio: [this.datingRef.consultorio]
      })
    })
  }

  onSubmit() {
    const id = this.act.snapshot.paramMap.get('id');
    
    this.datingService.updateDating(this.updateForm.value, id);
    this.router.navigate(['dating']);
    console.log(this.updateForm.value)
  }
}
