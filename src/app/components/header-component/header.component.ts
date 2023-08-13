import { Component, Input } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private _cart: Cart = { items: [] };
  itemsQuantity = 0;

  //@Input() lets a parent component update data in the child component. Conversely 
  //@Output() lets the child send data to a parent component.
  //https://angular.io/guide/inputs-outputs
  @Input()
  //getter setter; https://www.w3schools.com/java/java_encapsulation.asp
  //private variables can only be accessed within the same class (an outside class has no access to it). 
  //However, it is possible to access them if we provide public get and set methods.
  //The get method returns the variable value, and the set method sets the value.
  get cart(): Cart {
    return this._cart;
  }

  set cart(cart: Cart) {
    this._cart = cart;

    this.itemsQuantity = cart.items
      .map((item) => item.quantity)
      .reduce((prev, curent) => prev + curent, 0);
  }

  constructor(private cartService: CartService) {}

  getTotal(items: CartItem[]): number {
    return this.cartService.getTotal(items);
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }
}
