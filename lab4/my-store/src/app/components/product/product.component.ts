import {Component, Input} from "@angular/core";
import {IProduct} from "../../models/product";
import {CurrencyPipe, DecimalPipe, SlicePipe} from "@angular/common";

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
  imports: [
    CurrencyPipe,
    DecimalPipe,
    SlicePipe
  ],
  styleUrl: './product.component.css'
})


export class ProductComponent {
  @Input() product: IProduct

  shareClick(text: string, url: string){
    const shareUrl = `https://t.me/share/url?url=${url}&text=${text}`;
    window.open(shareUrl, '_blank');
  }

  protected readonly encodeURIComponent = encodeURIComponent;
}


