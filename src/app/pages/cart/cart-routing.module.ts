import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CartComponent} from "./cart.component";

export const routes: Routes = [
    {
        path: '',
        component: CartComponent,
    }
    // .. here goes our components routes
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CartRoutingModule {
}
