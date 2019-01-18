import {Component, OnInit} from '@angular/core';
import {ProductService} from '../product.service'
import {CartService} from '../../cart/cart.service'
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'ngx-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private service: ProductService,
    private cartService: CartService,
    private modalService: NgbModal) {
  }

  public products = <Object>[];

  ngOnInit() {
    this.service.getProducts().subscribe((rest)=>{
      console.log(rest);
      this.products = rest;
    })
  }

  addToCart(id){
     this.cartService.addProductCart(id).subscribe((rest)=>{
       console.log(rest);
     })
  }
  
  open(content) {
    this.modalService.open(content, {size: 'lg'});
  }
}
