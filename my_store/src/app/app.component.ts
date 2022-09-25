import { Component } from '@angular/core';
import { Product } from './product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg = 10;
  title = 'my_store';
  name = 'Ana';
  age = 38;
  img = 'https://phantom-marca.unidadeditorial.es/cf0fef865d1c3395c8a22be42dfa56d0/resize/990/f/webp/assets/multimedia/imagenes/2021/09/27/16327333036439.jpg';
  btnDisable = true;
  person = {
    name: 'Anita',
    age: 18,
    img:'https://phantom-marca.unidadeditorial.es/cf0fef865d1c3395c8a22be42dfa56d0/resize/990/f/webp/assets/multimedia/imagenes/2021/09/27/16327333036439.jpg'

  }

  box = {
    width: 100,
    height: 100,
    background: 'red'
  }

  names: string[] = ['Nico', 'Juli', 'Santi', 'Juan', 'Gustavo'];
  newname: string = '';
  products:Product[] = [
    {
      name: "Temporda 1 Dr Who",
      price: 456,
      image: "./assets/images/drwho1.jpg",
      category:"all"
    },
    {
      name: "Documental sadhguru",
      price: 2939,
      image: "./assets/images/sadhguru.jpg"
    },
    {
      name: "Los 7 pecados capitales",
      price: 453,
      image: "./assets/images/7pecados.jpg"
    },
    {
      name: "Mentantei Conan",
      price: 6545,
      image: "./assets/images/conan.jpg"
    },
    {
      name: "Documetal Tierra",
      price: 3343,
      image: "./assets/images/tierra.jpg"
    },
    {
      name: "Temporda 10 Dr Who",
      price: 376,
      image: "./assets/images/drwho10.jpg"
    }
  ];

  register = {
    name: '',
    email: '',
    password:''
  }


  toggleButton() {
    this.btnDisable = !this.btnDisable;
  }

  increaseAge() {
    this.person.age += 1;
  }

  onScroll(event:Event) {
    const elelment = event.target as HTMLElement;
    console.log(elelment.scrollTop);
  }

  changeName(event: Event) {
    const elelment = event.target as HTMLInputElement;
    /*console.log(elelment.value);*/
    this.person.name = elelment.value;

  }

  addName() {
    this.names.push(this.newname);
    this.newname = '';

  }
  deleteName(number: number) {
    this.names.splice(number,1);
  }

  onRegister() {
    console.log(this.register)
  }
}
