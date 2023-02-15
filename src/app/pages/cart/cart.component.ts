import { Component,OnInit } from '@angular/core';

import { CartService } from 'src/app/Services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

    constructor(private cartService : CartService){}

    addFilm(item_cart: any){
      this.cartService.addFilm(item_cart);

    }
    cart:any;
    ngOnInit(): void{
      this.cart = this.cartService.getCart();
    }
}
