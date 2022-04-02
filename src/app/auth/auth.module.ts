import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewUserComponent } from './new-user/new-user.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ForgotComponent } from './forgot/forgot.component';
import { DashbordComponent } from './dashbord/dashbord.component';



@NgModule({
  declarations: [
    NewUserComponent,
    LoginComponent,
    LogoutComponent,
    ForgotComponent,
    DashbordComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
