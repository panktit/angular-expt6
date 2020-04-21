import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(private shop: ItemService) { }
  products;
  recent;
  ngOnInit(): void {
    this.products = this.shop.products;
  }
  onClick(id) {
    // alert("Button is clicked");
    this.recent = "Item "+id+" added to cart";;
    this.shop.addToCart(id);
  }
}
