import { Component, OnInit } from '@angular/core';
import { Product,CreateProductDTO,UpdateProductDTO } from '../../models/product.model';
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppingCart: Product[] = [];
  total = 0;
  products: Product[] = [];
  showProductDetail = false;
  productChosen: Product ={
    id: '',
    price: 0,
    images: [],
    title: '',
    category: {
      id:'',
      name:''
    },
    description: ''
  };
  limit=10;
  offset=0;

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    this.productsService.getProductByPage(10,0)
    .subscribe(data => {
      console.log(data);
      this.products = data;
    });
  }

  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

  toggleProductDetail(){
    this.showProductDetail = !this.showProductDetail;
  }
  
  onShowDetail(id: string){
    this.productsService.getProduct(id)
    .subscribe(data =>{
      //console.log('product',data);
      this.productChosen = data;
      this.toggleProductDetail();
    });

  }

    createNewProduct(){
      const productnew: CreateProductDTO={
        title:"nuevo producto",
        description:"Descripcion del producto",
        images: [''],
        price:111,
        categoryId:2
      }

      this.productsService.create(productnew)
      .subscribe(data =>{
        console.log('create',data);
        this.products.unshift(data);
      });
    
  }

  updateProduct(){
    const changes: UpdateProductDTO = {
      title:'nuevo titulo'
    }
    const id = this.productChosen.id;
    this.productsService.update(id,changes)
    .subscribe(data =>{
      console.log('update',data);
      const productIndex=this.products.findIndex(item =>item.id === this.productChosen.id);
      this.products[productIndex] =data;
      this.productChosen=data;
    })
  }

  deleteProduct(){
    const id = this.productChosen.id;
    this.productsService.delete(id)
    .subscribe(() =>{
      const productIndex=this.products.findIndex(item =>item.id === this.productChosen.id);
      this.products.splice(productIndex);
      this.showProductDetail = false;
    })
  }

  loadMore(){
    this.productsService.getProductByPage(this.limit,this.offset)
    .subscribe(data => {
      console.log(data);
      this.products=this.products.concat(data);
      this.offset += this.limit;
    });
  }
  
}
