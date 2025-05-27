import { Injectable } from "@angular/core";
import { Product } from "../Interfaces/product.interface";
import data from '../../../db.json'


@Injectable({
    providedIn:'root'
})

export class ProductService {
    private products: Product[] = data;

    getProduct(): Product[] {
        return this.products
    }

    getProductById(id:number): Product | undefined {
        const product = this.products.find((product)=> product.id === id);
        return product? product : undefined;  
    }
}