import { Injectable } from "@angular/core";
import { Product } from "../Interfaces/product.interface";
import data from '../../../db.json'
import { promises } from "dns";


@Injectable({
    providedIn:'root'
})

export class ProductService {
    private products: Product[] = data.products;

   async  getProduct(): Promise<Product[]> {
    const response = await fetch('http://localhost:3000/products')
    const data = await response.json();
        return data
    }

   async getProductById(id:number): Promise<Product | undefined>{
       const response = await fetch(`http://localhost:3000/products/${id}`)
       const data = await response.json()
       return data
    }
}