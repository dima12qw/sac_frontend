import { Component, OnInit } from '@angular/core';
import {ProductService} from './../product/product.service'
@Component({
  selector: 'ngx-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private productService: ProductService) { }
  products;
  ngOnInit() {
    this.productService.viewSessionDetails().subscribe((rest)=>{
      // console.log(rest);
      this.products = rest
      console.log(this.products)
    })
  }
  

  checkout(){
    this.productService.checkoutSession().subscribe((rest)=>{
      console.log(rest);
    })
  }
}
