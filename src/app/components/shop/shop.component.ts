import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { Product } from './../../Interfaces/product.interface';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [NgOptimizedImage, CurrencyPipe],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {
  @Input() product! : Product;
}
