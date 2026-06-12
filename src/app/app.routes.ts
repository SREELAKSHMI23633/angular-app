import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'products', 
        loadChildren: () => import('./products/pages/products/products.routes').then(m => m.PRODUCTS_ROUTES)
    },
];
