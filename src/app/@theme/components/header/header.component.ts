import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { LayoutService } from '../../../@core/data/layout.service';
import {Router} from "@angular/router";
import {ProductService} from './../../../pages/product/product.service'
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  @Input() position = 'normal';

  user: any;
  public link = 'No session opened!';
  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserService,
              private analyticsService: AnalyticsService,
              private layoutService: LayoutService,
              private router: Router,
              private productService: ProductService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe((users: any) => this.user = users.nick);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');

    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }

  goToCart(){
      this.router.navigate(['pages/cart'])
  }

  createSession(){
       this.productService.createSession().subscribe((rest)=>{
         console.log(rest);
         localStorage.setItem('sessionId', rest['sessionId']);
         localStorage.setItem('owner', rest['owner']);
         this.productService.addUserSession(localStorage.getItem('sessionId')).subscribe()
         this.router.navigate(['pages'], {queryParams: {sessionId: localStorage.getItem('sessionId')}})
       })
  }

  open(content){
    if(localStorage.getItem('sessionId')){
      this.link= "http://localhost:4200/#/pages?sessionId=" + localStorage.getItem('sessionId');
    }
    this.modalService.open(content, {size: 'sm'})
  }
}
