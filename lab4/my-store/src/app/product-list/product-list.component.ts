import {Component, signal, OnInit} from '@angular/core';
import {ProductComponent} from "../components/product/product.component";
import {products, category, deletedProducts} from "../data/products";
import {NgForOf, NgIf} from "@angular/common";
import {FilterByCategoryPipe} from "../filter-by-category.pipe";
import {FormsModule} from "@angular/forms";
import { NgSelectModule,NgOption } from '@ng-select/ng-select';
import {FilterByNamePipe} from "../filter-by-name.pipe";
import {IProduct} from "../models/product";
import {Category} from "../models/category";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    ProductComponent,
    NgForOf,
    FilterByCategoryPipe,
    FormsModule,
    NgSelectModule,
    FilterByNamePipe,
    NgIf
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  protected products:IProduct[] = products;
  protected categories:Category[] = category;
  searchText: string;
  selectedCategoryId: string;
  selectedCategoryName: any;
  constructor() {
  }
  ngOnInit(): void {
    this.categories = category
    this.products = products
  }
  onCategoryChange(): void {
    this.ngOnInit()
    if(this.selectedCategoryName == null){
      return;
    }
    this.products = this.products.filter(product => product.category === this.selectedCategoryName.name);
  }

  protected readonly deletedProducts = deletedProducts;
}
