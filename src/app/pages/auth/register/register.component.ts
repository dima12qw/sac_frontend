import {ChangeDetectorRef, Component, Inject} from '@angular/core';
import {NB_AUTH_OPTIONS, NbAuthService, NbRegisterComponent} from '@nebular/auth';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {logger} from "codelyzer/util/logger";

// import {SessionService} from "../services/auth.service";

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
})
export class NgxRegisterComponent extends NbRegisterComponent {
  constructor(protected service: NbAuthService,
              @Inject(NB_AUTH_OPTIONS) protected options = {},
              protected cd: ChangeDetectorRef,
              protected router: Router,
              protected authService: AuthService) {
    super(service, options, cd, router);
  }

  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  user: any = {};


  register(): void {
    this.submitted = true;
    this.errors = this.messages = [];
    delete this.user.confirmPassword;
    console.log(this.user)
    this.authService.register(this.user).subscribe((rest) => {
      this.submitted = false;
      console.log(rest)
    })
  }

  goLogin() {
    this.router.navigate(['/auth/login']);
  }

  goHome() {
    this.router.navigate(['/home'])
  }
}


