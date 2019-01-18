import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NgxLoginComponent} from "./login/login.component";
import {NbAuthComponent} from "@nebular/auth";
import {NgxRegisterComponent} from "./register/register.component";

export const routes: Routes = [
  {
    path: '',
    component: NbAuthComponent,
    children: [{
      path: 'login',
      component: NgxLoginComponent
    },
      {
        path: 'register',
        component: NgxRegisterComponent
      }]
  }
  // .. here goes our components routes
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxAuthRoutingModule {
}
