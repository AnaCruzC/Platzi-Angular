import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShoppingCar:Product[]=[];
  private myCart = new BehaviorSubject<Product[]>([]);

  myCart$ =  this.myCart.asObservable();

  constructor() {
    
   }

  addProduct(product: Product){
    console.log('Producto --> ',product);
    this.myShoppingCar.push(product);
    this.myCart.next(this.myShoppingCar); // transmite la lista de productos
  }

  getTotal(){
    //this.total=this.total+product.price;
    return this.myShoppingCar.reduce((sum,item) => sum + item.price,0);
  }

  getMyShoppingCart(){
    return this.myShoppingCar;
  }
  
}
