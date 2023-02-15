import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cart = new Array();

  getCart(){
    return this.cart;
  }

  addFilm(film:any){
    this.cart.push(
      {
        film: film ,
        quantity : 1
      }
    )
  }
}
