import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductComponent} from './product/product.component';
import {ProductRoutingModule} from "./product-routing.module";
import {ThemeModule} from "../../@theme/theme.module";
import {HttpClientModule} from "@angular/common/http";
import {ProductService} from "./product.service";
@NgModule({
    declarations: [ProductComponent],
    imports: [
        CommonModule,
        ProductRoutingModule,
        ThemeModule,
        HttpClientModule
    ],
    providers: [ProductService]
})
export class ProductModule {
}
