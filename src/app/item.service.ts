import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  products = [
    {id: 1, name: "Bread", price:25},
    {id: 2, name: "Milk", price:60},
    {id: 3, name: "Butter", price:150}
  ];
  selected = [];
  constructor() { }
  addToCart(id) {
    for(let item of this.products) {
      if(item.id === id) {
        this.selected.push(item);
      } 
    }
  }
  removeFromCart(id) {
    let index = this.selected.findIndex(x => x.id === id)
    this.selected.splice(index,1);
  }
}
