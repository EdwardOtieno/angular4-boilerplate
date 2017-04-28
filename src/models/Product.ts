export class Product {
  public title: string;
  public available: number;
  public price :number;
  public description:string;
  public category:string;

  constructor(itemname:string, quantity:number,item_price:number,item_description:string,item_category:string) {
    this.title=itemname;
    this.available=quantity;
    this.price=item_price;
    this.description=item_description;
    this.category=item_category;
  }
}
