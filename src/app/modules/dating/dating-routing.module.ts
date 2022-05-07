import { UpdateDatingComponent } from './update-dating/update-dating.component';
import { NewDatingComponent } from './new-dating/new-dating.component';

import { HomeDatingComponent } from './home-dating/home-dating.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: HomeDatingComponent
  },
  {
    path:'new',
    component: NewDatingComponent
  },
  {
    path: 'edit/:id',
    component: UpdateDatingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatingRoutingModule { }
