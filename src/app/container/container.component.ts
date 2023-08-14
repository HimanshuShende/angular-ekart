import { Component } from '@angular/core';

interface Product {
  name: string;
  price: number;
  discount: number;
  color: string;
  inStock: number;
  imageUri?: string;
}

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  listOfString: string[] = ["Ma", "df" , "dfpo", "p[sd", "sdjfgsduy"]
}
