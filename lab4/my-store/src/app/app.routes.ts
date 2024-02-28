import { Routes } from '@angular/router';
import {ProductComponent} from "./components/product/product.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {products} from "./data/products";

export const routes: Routes = [
  { path: 'product-list', component: ProductListComponent},
  { path: '', redirectTo: '/product-list', pathMatch: "full"},
  { path: 'product-details/:id', component: ProductDetailsComponent}
];
