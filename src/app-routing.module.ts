import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './modules/login/login.component';
import { ProductComponent }from './modules/product/product.component';
import { HeaderComponent }from './modules/header/header.component';
import { CalenderComponent } from './modules/calender/calender.component';
import { WidgetComponent }from './modules/widget/widget.component';
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
        path: 'header',
        component: HeaderComponent
    },
    {
        path: 'widget',
        component: WidgetComponent
    },
    {
        path: 'calender',
        component: CalenderComponent
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
export class AppRoutingModule { }
