import { Injectable } from '@angular/core';
import { Product } from 'src/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartdataService {

  sharedData: Array<Product>;
  Total = 0;

  constructor() {
  this.sharedData = new Array<Product>();

   }
}
