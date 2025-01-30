import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  imports: [CommonModule, FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  searchText: string = ''
  text: string = ''
  count = 0

  // All Products List Here
  products = [
    {
      image: "https://cdn.media.amplience.net/i/scvl/144406_308584_1?fmt=auto&w=640",
      name: "Men's New Balance 515 Sustainable Sneakers'",
      price: "6,200",
      discount: "8,999",
      inStock: true
    },

    {
      image: "https://cdn.media.amplience.net/i/scvl/151851_341697_1?fmt=auto&w=640",
      name: "Women's New Balance ML408 Running Shoes",
      price: "4,099",
      discount: "4,999",
      inStock: false
    },

    {
      image: "https://cdn.media.amplience.net/s/scvl/144779_359040_SET/1?fmt=auto&$webPdpProduct$",
      name: "Girls' New Balance Big Kid 515 Running Shoes",
      price: "6,099",
      discount: "6,999",
      inStock: true
    }
  ]

  // This is for the search button
  searchButton() {
    this.text = this.searchText
  }

  // This is for adding product to the Cart
  ButtonClick(product: any) {
    if (!product.inStock) {
      alert("Product is out of stock. You will be notified when it's Available.");
    }
    else {
      this.addToCart();
    }
  }

  addToCart() {
    const audio = new Audio('click.mp3') //This is for playing audio
    audio.play()

    this.count++;

  }
}