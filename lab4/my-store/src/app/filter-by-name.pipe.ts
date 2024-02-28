import {Pipe, PipeTransform} from "@angular/core";
import {Category} from "./models/category";
import {IProduct} from "./models/product";

@Pipe({
  standalone: true,
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {
  transform(products: IProduct[], categories: Category[], selectedCategoryName: string): IProduct[] {
    if (!selectedCategoryName) {
      return products;
    }
    return products.filter(product => product.category === selectedCategoryName);
  }
}
