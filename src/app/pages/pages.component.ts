import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { MENU_ITEMS } from './pages-menu';
import {ProductService} from './product/product.service'
@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent implements OnInit {

  menu = MENU_ITEMS;
  constructor(private activatedRoute: ActivatedRoute,
    private service: ProductService){}
ngOnInit(){
     this.activatedRoute.queryParams.subscribe(params=>{console.log(params);
    if(params['sessionId'] != undefined)
      localStorage.setItem('sessionId', params['sessionId']);
      this.service.addUserSession(params['sessionId']).subscribe()})
     
}
}
