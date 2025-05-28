import { ProductService } from './../../../services/product.service';
import { Component, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from '../../../Interfaces/product.interface';
import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms'
import { CommentService } from '../../../services/comment.service';
import { Comment } from '../../../Interfaces/comment.interface';



@Component({
    selector:'app-deatil',
    standalone:true,
    imports:[CurrencyPipe, NgOptimizedImage, ReactiveFormsModule ],
    templateUrl:'./detail-product.component.html',
    styleUrl: './detail-product.component.scss'

})

export class DetailComponent{
    route:ActivatedRoute = inject(ActivatedRoute)
    router: Router = inject(Router)
    productService = inject(ProductService)
    product: Product | undefined
    commentServise = inject(CommentService)

    comments: Comment[] = []

    commentForm = new FormGroup({
        commetn: new FormControl('')
    });

        constructor () {
        const productId = this.route.snapshot.params['id']
    this.productService.getProductById(+productId).then(data => {
        if(data)  {
            this.product = data;
        } else{
            this.router.navigate(['/', productId]);
        }
    });

    this.commentServise.getComments(productId).then((data) => {
        this.comments = data;
        console.log(this.comments)
    })
 
    }

    onSubmit() {
        const productId = this.route.snapshot.params['id']
        this.commentServise.addComment(productId, this.commentForm.value.commetn!)

        .then((data) => {
            this.commentForm.reset()
            this.comments.push(data)
        })
    }

    onDelete(id: number) {
        this.commentServise.deleteComment(id).then(() => {
            this.comments = this.comments.filter((comment) => comment.id !== id)
        })
    }

}