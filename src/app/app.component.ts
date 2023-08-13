import { Component, OnInit } from '@angular/core';
import { Cart } from './models/cart.model';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  cart: Cart = { items: [] };

  constructor(private cartService: CartService) {}

  //Basically metod runs when the components are started initialization
  ngOnInit() {
    //Update cart property
    this.cartService.cart.subscribe((_cart) => {
      this.cart = _cart;
    });
  }
}
