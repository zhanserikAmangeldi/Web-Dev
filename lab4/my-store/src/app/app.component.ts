import  {Component, OnInit, NgModule} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {NgForOf, TitleCasePipe} from "@angular/common";
import {ProductComponent} from "./components/product/product.component";
import {IProduct} from "./models/product";
import {Category} from "./models/category";
import { products as data} from './data/products';
import { category as categoryData} from './data/products'
import {ProductsService} from "./services/products.service";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TitleCasePipe, ProductComponent, NgForOf, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'my-store';
  products: IProduct[] = [];
  categories: Category[] = []
  constructor(private productsService: ProductsService) {
  }
  ngOnInit() {
    this.products = data
    this.categories = categoryData
  }

}
