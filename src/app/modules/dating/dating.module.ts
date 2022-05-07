import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatingRoutingModule } from './dating-routing.module';
import { HomeDatingComponent } from './home-dating/home-dating.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { NewDatingComponent } from './new-dating/new-dating.component';
import { UpdateDatingComponent } from './update-dating/update-dating.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatingService } from 'src/app/services/dating.service';


@NgModule({
  declarations: [
    HomeDatingComponent,
    NewDatingComponent,
    UpdateDatingComponent,
  ],
  imports: [
    CommonModule,
    DatingRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatingService]
})
export class DatingModule { }
