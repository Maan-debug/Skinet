import { Component, inject, Input } from '@angular/core';
import { Product } from '../../../shared/models/product';
import { MatCardActions, MatCardContent, MatCardModule } from '@angular/material/card';
import { CurrencyPipe } from '@angular/common';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-product-item',
  imports: [
    MatCardModule,
    MatCardContent,
    CurrencyPipe,
    MatCardActions,
    MatButtonModule,
    MatIcon,
    RouterLink
  ],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
  @Input() product?: Product;
  cartService = inject(CartService);
}
