import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [
    {
      id: 1,
      name: "Id laborum qui incididunt sint tempor reprehenderit labore et.",
      descr: "Exercitation exercitation aute nostrud est dolore magna adipisicing occaecat ipsum id cillum quis commodo. Quis ad anim anim consequat incididunt. Sint labore ut amet mollit commodo do elit velit fugiat. Ipsum ad officia laboris veniam excepteur.",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Blue", "Black"],
      price: 160,
      is_in_inventory: false,
      items_left: 3,
      slug: 'nike-rect-infinity-run-flyknit',
      imageUri: "/assets/images/iphone.png"
    },
    {
      id: 2,
      name: "Laborum cupidatat id excepteur in et incididunt.",
      descr: "Exercitation exercitation aute nostrud est dolore magna adipisicing occaecat ipsum id cillum quis commodo. Quis ad anim anim consequat incididunt. Sint labore ut amet mollit commodo do elit velit fugiat. Ipsum ad officia laboris veniam excepteur.",
      brand: "NIKE",
      gender: "MEN/WOMEN",
      category: "WALKING",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Blue", "Black"],
      price: 200,
      is_in_inventory: false,
      items_left: 3,
      slug: 'nike-rect-miler',
      imageUri: "/assets/images/iphone.png"
    },
    {
      id: 3,
      name: "Voluptate cillum consectetur et veniam fugiat sunt.",
      descr: "Exercitation exercitation aute nostrud est dolore magna adipisicing occaecat ipsum id cillum quis commodo. Quis ad anim anim consequat incididunt. Sint labore ut amet mollit commodo do elit velit fugiat. Ipsum ad officia laboris veniam excepteur.",
      brand: "NIKE",
      gender: "WOMEN",
      category: "RUNNING",
      size: [6, 9, 10],
      color: ["White", "Blue", "Black"],
      price: 130,
      is_in_inventory: false,
      items_left: 3,
      slug: 'nike-rect-infinity-run-flyknit',
      imageUri: "/assets/images/iphone.png"
    }
  ];
}
