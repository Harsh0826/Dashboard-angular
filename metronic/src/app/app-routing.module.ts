import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignupComponent } from './components/signup/signup.component';
import { BrowserModule } from '@angular/platform-browser';
import { AuthGuard } from './shared/auth.guard';
import { TrendsComponent } from './components/trends/trends.component';
import { DashboardContentComponent } from './components/dashboard-content/dashboard-content.component';
import { NewarrivalsComponent } from './components/newarrivals/newarrivals.component';


const routes: Routes = [

  {
    path: "dashboard/:id",
    component: DashboardComponent,
    canActivate:[AuthGuard],
    children: [
      {path: '', component:DashboardContentComponent},
      {path: 'trends', component: TrendsComponent},
      {path: 'newarrivals', component: NewarrivalsComponent}
    ]
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "signup",
    component: SignupComponent
  },
  
  {    
     path: '', redirectTo: 'login', pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
