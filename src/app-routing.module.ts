import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { LoginComponent } from './modules/login/login.component';
import { ProductComponent }from './modules/product/product.component';
const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'product',
        component: ProductComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/login'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
