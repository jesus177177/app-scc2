import { Component, OnInit } from '@angular/core';

import { DatingService } from 'src/app/services/dating.service';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";


@Component({
  selector: 'app-new-dating',
  templateUrl: './new-dating.component.html',
  styleUrls: ['./new-dating.component.css']
})
export class NewDatingComponent implements OnInit {
  public createForm: FormGroup;

  constructor(
    public datingService: DatingService,
    public formBuilder: FormBuilder,
    public router: Router
  ) { 
    this.createForm = this.formBuilder.group({
      nombre: [''],
      telefono: [''],
      fecha: [''],
      hora: [''],
      consultorio: ['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.datingService.createDating(this.createForm.value);
    console.log(this.createForm.value)
    this.router.navigate(['dating'])
  }
  
}
