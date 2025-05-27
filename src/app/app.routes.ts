import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/home/detail-product/detail-product.component';

export const routes: Routes = [

    {
        path:'', component: HomeComponent, title:'Home Page'
    },

    {
        path:'details/:id', component: DetailComponent, title:'Detail Product'
    }

];
