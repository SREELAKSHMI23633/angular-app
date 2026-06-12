import {Routes} from '@angular/router';

// products.routes.ts
export const PRODUCTS_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./products').then((m) => m.Products),
    },
];