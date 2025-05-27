import { ProductService } from './../../../services/product.service';
import { Component, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from '../../../Interfaces/product.interface';
import { CurrencyPipe, NgOptimizedImage } from '@angular/common';


@Component({
    selector:'app-deatil',
    standalone:true,
    imports:[CurrencyPipe, NgOptimizedImage],
    templateUrl:'./detail-product.component.html',
    styleUrl: './detail-product.component.scss'

})

export class DetailComponent{
    route:ActivatedRoute = inject(ActivatedRoute)
    router: Router = inject(Router)
    productService = inject(ProductService)
    product: Product | undefined


    constructor () {
        const productId = this.route.snapshot.params['id']
    this.productService.getProductById(+productId).then(data => {
        if(data)  {
            this.product = data;
        } else{
            this.router.navigate(['/', productId]);
        }
    })
    }
}