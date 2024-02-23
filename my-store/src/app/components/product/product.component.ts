import {Component, Input} from "@angular/core";
import {IProduct} from "../../models/product";
import {CurrencyPipe, DecimalPipe, NgIf, SlicePipe} from "@angular/common";
import { ShareModule } from "ngx-sharebuttons";
import { ShareIconsModule } from "ngx-sharebuttons/icons";
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
  imports: [
    CurrencyPipe,
    DecimalPipe,
    SlicePipe,
    ShareModule,
    ShareIconsModule,
    FaIconLibrary,
    NgIf
  ],
  styleUrl: './product.component.css'
})


export class ProductComponent {
  @Input() product: IProduct
}


