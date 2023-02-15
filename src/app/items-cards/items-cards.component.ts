import { CartService } from 'src/app/Services/cart.service';
import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-items-cards',
  templateUrl: './items-cards.component.html',
  styleUrls: ['./items-cards.component.scss']
})
export class ItemsCardsComponent {
  constructor(private CartService : CartService ){}
  title ="Shop";

  @Output() addFilmCallBack : EventEmitter<any> = new EventEmitter();;

  @Input() item : any


  addFilm(item: any){
    this.CartService.addFilm(item);
  }

}
