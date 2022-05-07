import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home/home.component';


const routes: Routes = [
  {
    path:'', component: HomeComponent, pathMatch:'full'
  },
  {
    path:'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'patient',
    loadChildren: () => import('./modules/patient/patient.module').then(m => m.PatientModule)
  },
  {
    path: 'dating',
    loadChildren: () => import('./modules/dating/dating.module').then(m => m.DatingModule)
  },
  {
    path:'library',
    loadChildren: () => import('./modules/library/library.module').then(m => m.LibraryModule)
  },
  {
    path:'users',
    loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)
  },
  {
    path:'maintenence',
    loadChildren: () => import('./modules/maintenence/maintenence.module').then(m => m.MaintenenceModule)
  },
  {
    path:'configuration',
    loadChildren: () => import('./modules/configuration/configuration.module').then(m => m.ConfigurationModule)
  },
  {
    path:'help',
    loadChildren: () => import('./modules/help/help.module').then(m => m.HelpModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
