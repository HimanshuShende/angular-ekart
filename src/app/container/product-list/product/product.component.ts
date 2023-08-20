import { Component, Input } from '@angular/core';

interface Product {
  id: number;
  name: string;
  descr: string;
  brand: string;
  gender: string;
  category: string;
  size: number[];
  color: string[];
  price: number;
  is_in_inventory: boolean;
  items_left: number;
  slug: string;
  imageUri: string;
  discountPrice?: number;

}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: Product;
}
