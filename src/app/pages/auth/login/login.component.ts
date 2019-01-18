import {ChangeDetectorRef, Component, Inject} from '@angular/core';
import {NB_AUTH_OPTIONS, NbAuthService, NbLoginComponent} from '@nebular/auth';
import {FormGroup} from "@angular/forms";
// import {SessionService} from "../services/auth.service";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
})
export class NgxLoginComponent extends NbLoginComponent {
  user: any = {};
  submitted: boolean = false;

  constructor(protected service: NbAuthService,
              @Inject(NB_AUTH_OPTIONS) protected options = {},
              protected cd: ChangeDetectorRef,
              protected router: Router,
              protected authService: AuthService) {
      super(service, options, cd, router);
  }

  login(): void {
    this.submitted = true;
    this.authService.login(this.user).subscribe((res)=>{
      this.submitted = false;
      localStorage.setItem('sessionUser',res['headers'].get('Authorization'))
      this.router.navigate(['pages'])
    })

  }

  public goHome(){
    this.router.navigate(['home']);
  }
}
