import { Component, inject } from '@angular/core';
import { ShopComponent } from '../../components/shop/shop.component';
import { ProductService } from '../../services/product.service';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ShopComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  productService = inject(ProductService)

  productss = this.productService.getProduct()

}
