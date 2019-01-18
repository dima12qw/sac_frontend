import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartComponent} from './cart.component';
import {CartService} from "./cart.service";
import {CartRoutingModule} from "./cart-routing.module";
import {ThemeModule} from "../../@theme/theme.module";

@NgModule({
    declarations: [CartComponent],
    imports: [
        CommonModule,
        CartRoutingModule,
        ThemeModule
    ],
    providers: [CartService]
})
export class CartModule {
}
