import {Component, Input} from "@angular/core";
import {IProduct} from "../../models/product";
import {CurrencyPipe, DecimalPipe, NgIf, SlicePipe} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {Router} from "@angular/router"
import {deletedProducts} from "../../data/products";

import {products} from "../../data/products";
@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
  imports: [
    CurrencyPipe,
    DecimalPipe,
    SlicePipe,
    RouterLink,
    RouterLinkActive,
    NgIf
  ],
  styleUrl: './product.component.css'
})


export class ProductComponent {
  @Input() product: IProduct


  shareClick(text: string, url: string){
    const shareUrl = `https://t.me/share/url?url=${url}&text=${text}`;
    window.open(shareUrl, '_blank');
  }

  constructor(private router: Router) {}
  redirectToOtherComponent(product:IProduct) {
    this.router.navigate(['/product-details/', +product.id]);
  }

  removeObj(){
    deletedProducts.push(this.product)
    console.log(deletedProducts)
  }
  like(){
    this.product.liked = !this.product.liked
    if(this.product.liked){
      this.product.likes += 1
    }else{
      this.product.likes -= 1
    }
  }
  protected readonly encodeURIComponent = encodeURIComponent;
  protected readonly deletedProducts = deletedProducts;
}


