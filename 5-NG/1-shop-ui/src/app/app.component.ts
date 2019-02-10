import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  products: Array<any> = [
    {
      id: 1,
      name: 'Laptop',
      price: 198000,
      image: 'images/Laptop.png',
      description: 'New Mac Pro',
      canBuy: true
    },
    {
      id: 2,
      name: 'Mobile',
      price: 18000,
      image: 'images/Mobile.png',
      description: 'New  Pro',
      canBuy: true
    }
  ]

 

}
