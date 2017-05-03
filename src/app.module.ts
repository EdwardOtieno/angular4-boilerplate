import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule, MdDialogRef } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RestService } from './services/rest.service';
import { LoginService }from './services/login.service';
import { ProductService } from './services/product.service';
import { CalendarModule } from 'angular-calendar';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import {
    AppComponent,
    LoginComponent,
    ProductComponent,
    AddProductComponent,
    HeaderComponent,
    CalenderComponent,
    WidgetComponent,
    CalenderUtillComponent
} from './modules';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        LoginComponent,
        ProductComponent,
        AddProductComponent,
        HeaderComponent,
        CalenderComponent,
        WidgetComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        FormsModule,
        MaterialModule.forRoot(),
        BrowserAnimationsModule,
        CalendarModule.forRoot(),
        NgbModalModule.forRoot(),
        CalenderUtillComponent
    ],
    providers: [
        RestService,
        LoginService,
        ProductService
    ],
    entryComponents: [
		ProductComponent
    ]
})
export class AppModule { }
