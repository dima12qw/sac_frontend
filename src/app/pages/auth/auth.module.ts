import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgxAuthRoutingModule } from './auth-routing.module';
import { NbAuthModule } from '@nebular/auth';
import {
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule
} from '@nebular/theme';
import {NgxLoginComponent} from "./login/login.component";
import {NgxRegisterComponent} from "./register/register.component";
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./services/auth.service";
// import {HttpService} from "./services/http.service";
// import {SessionService} from "./services/auth.service";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NgxAuthRoutingModule,
    ReactiveFormsModule,
    NbAuthModule,
    HttpClientModule
  ],
  declarations: [
    NgxLoginComponent,
    NgxRegisterComponent
    // ... here goes our new components
  ],
  // providers: [HttpService, SessionService]
  providers : [AuthService]
})
export class NgxAuthModule {
}
