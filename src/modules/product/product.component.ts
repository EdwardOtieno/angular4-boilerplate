import { Component,NgModule } from '@angular/core';
import { MdDialog } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Product } from '../../models';
import { ProductService } from '../../services/product.service';
import { MdDialogRef } from '@angular/material';
@Component({
    selector: 'product',
    template: require('./product.component.html')
})
export class ProductComponent {
   constructor(public dialog: MdDialog,public dialogRef:MdDialogRef<AddProductComponent>) {}
    openDialog() {
      this.dialogRef =this.dialog.open(AddProductComponent);
    }
}

@Component({
  selector: 'addproduct-component',
  template: require('./add.product.html'),
})
export class AddProductComponent{
  constructor(public productService: ProductService,public dialogRef: MdDialogRef<AddProductComponent>) {
  }

  product=new Product("",0,0,"","");

  addProduct(product:Product){
      this.productService.addProduct(product).subscribe(() => {
      this.dialogRef.close();
        // this.productService.getAllProducts();
      });
  }
}
