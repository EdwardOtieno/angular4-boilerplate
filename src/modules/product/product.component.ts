import { Component,NgModule } from '@angular/core';
import { MdDialog } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
    selector: 'product',
    template: require('./product.component.html')
})
export class ProductComponent {
   constructor(public dialog: MdDialog) {}
  addProduct(): void {
    console.log("addProduct");
  }
  openDialog() {
    this.dialog.open(AddProductComponent);
  }
}

@Component({
  selector: 'addproduct-component',
  template: '<h1>I m in dialog</h1>',
})
export class AddProductComponent{

}
