import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}
  createDb() {
    const products = [
      {
        id: 1,
        name: 'Phone XL',
        stock: 10,
        price: 799,
        photo: 'assets/img/phone-xl.png',
      },
      {
        id: 2,
        name: 'Phone Mini',
        stock: 7,
        price: 699,
        photo: 'assets/img/phone-mini.png',
      },
      {
        id: 3,
        name: 'Phone Standard',
        stock: 5,
        price: 299,
        photo: 'assets/img/phone-standard.png',
      },
      {
        id: 4,
        name: 'Phone Special',
        stock: 3,
        price: 399,
        photo: 'assets/img/phone-special.png',
      },
    ];
    return { products };
  }
  genId(products: Product[]): number {
    return products.length > 0
      ? Math.max(...products.map((product) => product.id)) + 1
      : 11;
  }
}
