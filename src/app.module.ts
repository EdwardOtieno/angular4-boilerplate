import { NgModule } from '@angular/core';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RestService } from './services/rest.service';
import { LoginService }from './services/login.service';

import {
    AppComponent,
    LoginComponent,
    ProductComponent
} from './modules';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        LoginComponent,
        ProductComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        FormsModule,
        MaterialModule.forRoot(),
        BrowserAnimationsModule
    ],
    providers: [
        RestService,
        LoginService
    ]
})
export class AppModule {}
