import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Cart, CartItem } from '../models/cart.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = new BehaviorSubject<Cart>({ items: [] });

  //Display product
  constructor(private _snackBar: MatSnackBar) {}

  addToCart(item: CartItem): void {
    const items = [...this.cart.value.items];

    //Find if there is this item already added in the cart items
    const itemInCart = items.find((_item) => _item.id === item.id);
    if (itemInCart) {
      //If it's already added in the cart, quantity+1
      itemInCart.quantity += 1;
    } else {
      //If it's not already added in the cart, add item into the cart
      items.push(item);
    }

    this.cart.next({ items });

    //_snackBar is the service that display user's information
    //First argument is the text
    //Second argument is the text in button
    //Third argument is the duration of pop-up this snackbar (ms)
    this._snackBar.open('1 item added to cart.', 'Ok', { duration: 3000 });
    console.log(this.cart.value);
  }
}