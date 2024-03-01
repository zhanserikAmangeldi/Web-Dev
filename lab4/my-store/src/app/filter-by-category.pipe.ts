import {Pipe, PipeTransform} from "@angular/core";
import {Category} from "./models/category";
import {IProduct} from "./models/product";

@Pipe({
  standalone: true,
  name: 'filterByCategory'
})
export class FilterByCategoryPipe implements PipeTransform {
  transform(products: IProduct[], categories: Category[], selectedCategoryId  : string): IProduct[] {
    if (!selectedCategoryId) {
      return products;
    }
    return products.filter(product => product.title.toLowerCase().includes(selectedCategoryId.toLowerCase()));
  }
}
