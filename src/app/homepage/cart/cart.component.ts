import { Component, OnDestroy, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  cart: Cart = { items: [{
    product: 'https://via.placeholder.com/150',
    name: 'snickers',
    price: 150,
    quantity: 1,
    id: 1,
  }]};
  dataSource: CartItem[] = [];
  displayedColumns: string[] = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action',
  ];

  //private is only use in class component not in html
  constructor(private cartService: CartService) {}
  
  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }
  ngOnDestroy() {}
  
  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }
}
