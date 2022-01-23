import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product';
import { Injectable } from '@angular/core';
import { CartdataService } from '../cartdata.service';



@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})

@Injectable()
export class StoreComponent implements OnInit {

  public xbox : Product;
  public ps4 : Product;

  public products : Array<Product>;

  public cart : Array<Product>;

  constructor(private cartdataService  : CartdataService) {
    //Test Data
    this.xbox = new Product();
    this.xbox.img = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Microsoft-Xbox-One-S-Console-wController-L.jpg/300px-Microsoft-Xbox-One-S-Console-wController-L.jpg";
    this.xbox.Name = "Xbox One";
    this.xbox.Price = 149.99;
    this.xbox.Available = true;

    this.ps4 = new Product();
    this.ps4.img = "https://images-eu.ssl-images-amazon.com/images/I/71swUH5FIHL.__AC_SY300_SX300_QL70_ML2_.jpg";
    this.ps4.Name = "Playstation 4";
    this.ps4.Price = 249.99;
    this.ps4.Available = true;

    this.products = new Array<Product>();
    this.cart = new Array<Product>();
    this.products.push(this.xbox);
    this.products.push(this.ps4);


   }

  ngOnInit(): void {

  }

  addToCart(selectedProduct : Product){

    console.log("Add to cart pressed " +selectedProduct);
    this.cart.push(selectedProduct);
    console.log("Cart Size " + this.cart.length);
    this.cartdataService.sharedData.push(selectedProduct);
    this.cartdataService.Total = this.cartdataService.Total + selectedProduct.Price;
    console.log(this.cartdataService.Total);
  }




   addProduct(name , price , available){
    let newProduct : Product;
    newProduct.Name = name;
    newProduct.Price = price;
    newProduct.Available = available;

    this.products.push(newProduct);

  }

}
