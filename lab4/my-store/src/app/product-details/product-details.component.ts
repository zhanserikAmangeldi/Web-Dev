import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../models/product";

import {ActivatedRoute} from "@angular/router";
import {products} from "../data/products";
import {DecimalPipe} from "@angular/common";
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    DecimalPipe
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
  @Input() productDetail: IProduct

  constructor(private router:ActivatedRoute) {
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.productDetail =
        (products.filter(function (obj:IProduct){return obj.id.toString() === params['id']})) .at(0) as IProduct
    });

}
  shareClick(text: string, url: string){
    const shareUrl = `https://t.me/share/url?url=${url}&text=${text}`;
    window.open(shareUrl, '_blank');
  }
  protected readonly encodeURIComponent = encodeURIComponent;
}
