import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  // subTotal:number = 0
  
  // All Products List Here
  addedProducts = [
    {
      image: "https://cdn.media.amplience.net/i/scvl/144406_308584_1?fmt=auto&w=640",
      name: "Men's New Balance 515 Sustainable Sneakers'",
      price: 6200,
      discount: "8,999",
      inStock: true
    },

    {
      image: "https://cdn.media.amplience.net/i/scvl/151851_341697_1?fmt=auto&w=640",
      name: "Women's New Balance ML408 Running Shoes",
      price: 4099,
      discount: "4,999",
      inStock: false
    },

    {
      image: "https://cdn.media.amplience.net/s/scvl/144779_359040_SET/1?fmt=auto&$webPdpProduct$",
      name: "Girls' New Balance Big Kid 515 Running Shoes",
      price: 6099,
      discount: "6,999",
      inStock: true
    }
  ]

  get subTotal(): number {
    return this.addedProducts.reduce((total, item) => total + item.price, 0);
  }

  removeAll() {
      this.addedProducts = [];
  }
}