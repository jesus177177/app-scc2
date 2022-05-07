import { FormUserComponent } from './form-user/form-user.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:HomeUserComponent
  },
  {
    path:'new',
    component: FormUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
