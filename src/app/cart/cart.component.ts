import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private shop: ItemService) { }
  products;
  recent;
  ngOnInit(): void {
    this.products = this.shop.selected; 
  }
  onClick(id) {
    this.recent = "Item "+id+" removed from cart";
    this.shop.removeFromCart(id);
  }
}
