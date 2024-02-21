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
}


