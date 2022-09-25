import { Component, OnInit } from '@angular/core';
import { Product } from '../..//models/product.model';
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppingCar:Product[]=[];
  total=0;
  products: Product[] = [];
  today = new Date();
  date= new  Date(2021,1,21);
  showProductDetail =false;

  constructor(
    private storeServices: StoreService,
    private ProductsService : ProductsService
    ) { 
      this.myShoppingCar=this.storeServices.getMyShoppingCart();
    }

  ngOnInit(): void {
    this.ProductsService.getAllProducts()
    .subscribe(data => {
      console.log(data);
      this.products = data;
    });
  }

  onAddToShoppingCart(product: Product){
    console.log('Producto --> ',product);
    //this.myShoppingCar.push(product);
    this.storeServices.addProduct(product)
    //this.total=this.total+product.price;
    this.total = this.storeServices.getTotal();
  }

  toggleProductDetail(){
    this.showProductDetail =!this.showProductDetail;
  }
}
