import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Created with ♥ 2018</span>
    <div class="socials">
      <a href="https://github.com/AdryanIoan/sac_lucy" target="_blank" class="ion ion-social-github"></a>
      
    </div>
  `,
})
export class FooterComponent {
}
