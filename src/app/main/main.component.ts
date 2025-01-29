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
  searchText:string = ''
  text:string = ''
  count = 0

  products = [
    {
      image: "https://cdn.media.amplience.net/i/scvl/144406_308584_1?fmt=auto&w=640",
      name: "Men's New Balance 515 Sustainable Sneakers'",
      price: "6,200",
      discount:  "8,999"
    },

    {
      image: "https://cdn.media.amplience.net/i/scvl/151851_341697_1?fmt=auto&w=640",
      name: "Women's New Balance ML408 Running Shoes",
      price: "4,099",
      discount:  "4,999"
    },

    {
      image: "https://cdn.media.amplience.net/s/scvl/144779_359040_SET/1?fmt=auto&$webPdpProduct$",
      name: "Girls' New Balance Big Kid 515 Running Shoes",
      price: "6,099",
      discount:  "6,999"
    }
  ]

  searchButton() {
    this.text = this.searchText
  }

  addToCart() {
    this.count ++;
  }
}