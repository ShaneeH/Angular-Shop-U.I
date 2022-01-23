import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product';
import { CartdataService } from '../cartdata.service';




@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  public Cart : Array<Product>;


  constructor(public cartdataService  : CartdataService) {
    this.Cart = new Array<Product>();
   // this.Cart.push(this.cartdataService.sharedData.every);

   }

  ngOnInit(): void {
  }


  getCart(){

    console.log("getCart() pressed");
    console.log(this.cartdataService.sharedData.every);
  }

}
