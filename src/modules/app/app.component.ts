import { Component,NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { ProductComponent, AddProductComponent } from '../product/product.component';
@NgModule({
  imports: [
    MaterialModule
  ],

  declarations: [
    ProductComponent,
    AddProductComponent
  ],

  entryComponents: [
    AddProductComponent
  ]
})

@Component({
    selector: 'dynamic-form-app',
    template: require('./app.component.html')
})

export class AppComponent {


}
