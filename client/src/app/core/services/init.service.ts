import { inject, Injectable } from '@angular/core';
import { CartService } from './cart.service';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class InitService {

  private cartService = inject(CartService);
  Init() {
    const cardId = localStorage.getItem('cart_id');
    const cart$ = cardId ? this.cartService.getCart(cardId) : of(null)
    return cart$;
  }
}
