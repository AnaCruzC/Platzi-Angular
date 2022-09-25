import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  showImg = true;
  
  onLoadImg(img: string){
    console.log('log Padre' + img);
  }

  toggleImg(){
    this.showImg = !this.showImg;
  }
}
