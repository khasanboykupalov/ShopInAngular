import { Component, inject } from '@angular/core';
import { ShopComponent } from '../../components/shop/shop.component';
import { ProductService } from '../../services/product.service';
import { Product } from '../../Interfaces/product.interface';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ShopComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  productService = inject(ProductService)
  productList:Product[] = []
  filteredProducts:Product[]=[]

  constructor( ) {
   this.productService.getProduct().then(data =>{ 
    this.productList = data;
    this.filteredProducts = data;
  })
    
  }

  onSearch(searchTern: string) {
    if(!searchTern) {
      this.filteredProducts = this.productList;
      return
    }

    this.filteredProducts = this.productList.filter((prod) => 
      prod.title.toLowerCase().includes(searchTern.toLocaleLowerCase()) )
  }


  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.onSearch(input.value)
  }

}
