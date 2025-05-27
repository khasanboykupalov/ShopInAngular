import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { Product } from './../../Interfaces/product.interface';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [NgOptimizedImage, CurrencyPipe, RouterLink],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {
  @Input() product! : Product;
}
