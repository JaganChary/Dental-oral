// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';  
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser/src/browser';

import { MainModule } from './main/main.module';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
 
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login', 
    pathMatch: 'full',
  },
  { 
    path: 'login',
    component: LoginComponent, 
  },
  {
    path: 'student-admin',
    loadChildren: 'app/student-admin/student-admin.module#StudentAdminModule'
  },
  {
    path: 'main',
    loadChildren: 'app/main/main.module#MainModule'
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
 exports:[RouterModule]
})

export class AppRoutingModule { }
