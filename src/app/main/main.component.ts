import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-main',
  imports: [CommonModule, FormsModule, CartComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  searchText: string = ''
  text: string = ''
  count = 0

  isCartVisible: boolean = false; // Flag to control cart visibility

  // Method to toggle cart visibility
  showCart() {
    this.isCartVisible = !this.isCartVisible;
  }

  // Track added products by index
  addedProducts: boolean[] = [];

  // All Products List Here
  products = [
    {
      image: "image1.avif",
      name: "Men's New Balance 515 Sustainable Sneakers'",
      price: 6200,
      discount: 8999,
      inStock: true
    },

    {
      image: "image2.avif",
      name: "Women's New Balance ML408 Running Shoes",
      price: 4099,
      discount: 4999,
      inStock: false
    },

    {
      image: "image3.avif",
      name: "Girls' New Balance Big Kid 515 Running Shoes",
      price: 6099,
      discount: 6999,
      inStock: true
    },

    {
      image: "image4.webp",
      name: "adidas Womens Response Running Shoe",
      price: 5799,
      discount: 9999,
      inStock: true
    },

    {
      image: "image5.jpg",
      name: "Saucony Mens Axon 3 Running Shoe",
      price: 5790,
      discount: 9990,
      inStock: true
    },

    {
      image: "image6.jpg",
      name: "Nike Men's Casual Shoes Air Max Sc-Photon",
      price: 5697,
      discount: 5995,
      inStock: false
    }
  ]

  // This is for the search button
  searchButton() {
    this.text = this.searchText
  }

  // This is for adding product to the Cart
  ButtonClick(index: any) {
    if (!this.products[index].inStock) {
      alert("Product is out of stock. You will be notified when it's Available.");
    }
    else if (this.addedProducts[index]) {
      alert("Product already Added.")
    }
    else {
      this.addToCart(index);
    }
  }

  addToCart(index:any) {
    const audio = new Audio('click.mp3') //This is for playing audio
    audio.play()

    this.addedProducts[index] = true // Mark product as added
    this.count++;

  }
}