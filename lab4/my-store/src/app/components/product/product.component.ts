import {Component, Input} from "@angular/core";
import {IProduct} from "../../models/product";
import {CurrencyPipe, DecimalPipe, SlicePipe} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {ProductDetailsComponent} from "../../product-details/product-details.component";
import {ProductListComponent} from "../../product-list/product-list.component";
import {Router} from "@angular/router"
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
    RouterLinkActive
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

  protected readonly encodeURIComponent = encodeURIComponent;
}


