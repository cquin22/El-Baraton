import { Component, OnInit } from '@angular/core';
import {ItemShop} from "../../model/item-shop.model";
import {Product} from "../../model/product.model";
import { ShoppingCartNotificationService } from '../../_store-notifications/shoping-cart-notification.service';
import {Transaction} from "../../model/transaction-model";
import {ProcessTransactionService} from "../../_services/process-transaction.service";

import {Router} from "@angular/router";
const SHIPPING_COST = 5000;

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  public items: Array<ItemShop>;

  public showSummary: boolean;

  public selectedItemId: any;

  public itemIsAdd: boolean;

  public total: number = 0;

  public subTotal: number;

  public isRequest: boolean;

  public showAdditionalOptions: boolean;

  constructor(
    public shoppingCartNotificationService: ShoppingCartNotificationService,
    private procesTransaction: ProcessTransactionService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.items = this.shoppingCartNotificationService.getStoreShop();
    this.calculateTotal();
    this.shoppingCartNotificationService.getSubscription().subscribe(data => {
      if(data){
        this.itemIsAdd = true;
        setTimeout(()=>{    //<<<---    using ()=> syntax
          let i = this.indexOf(data.id, this.items);
          if(i == -1){
            this.items.push(data);
          }else{
            this.items[i].quantity = this.items[i].quantity+data.quantity;
            this.changeValueQuantity(this.items[i].quantity, i);
          }

          this.shoppingCartNotificationService.updateLogShop(this.items);
          this.itemIsAdd = false;
          this.calculateTotal();
          this.showSummary = true;
        },500);

      }

    })
  }

  public toggleSummary(){
    this.showSummary = !this.showSummary;
  }

  public removeItem(id: any){
    this.selectedItemId = id;
    setTimeout(()=>{    //<<<---    using ()=> syntax

      var _self = this;
      this.items.forEach(function (item, index) {
        if (item.id === id) {
          _self.items.splice(index, 1);
        }
      });
      this.shoppingCartNotificationService.updateLogShop(_self.items);
      this.calculateTotal();
    },500);

  }

  public changeValueQuantity(quatity: number, index: number){
    this.items[index].quantity = quatity;
    this.items[index].totalPrice = this.items[index].price;
    this.items[index].totalPrice = this.items[index].price * quatity;
    this.calculateTotal();
  }

  public calculateTotal(){
    var _self = this;
    _self.total = 0;
    this.items.forEach(function (item, index) {
      _self.total = _self.total + item.totalPrice;
    });
    this.subTotal = _self.total;
    _self.total = _self.total + SHIPPING_COST;
  }

  public indexOf(id, items): number {
    var i = 0;
    var len = items.length;
    for (i = 0; i < len; i++) {
      if (id === items[i].id) {
        return i;
      }
    }
    return -1;
  }


  public joinDescription(): string{
    let description = [];
    for(let item of this.items ){
      let des = item.brand + "/" + item.title + "/" + item.weight;
      description.push(des);
    }

    return description.join();
  }


  public selectPayFormat(){
    this.showAdditionalOptions = true;
  }

  public editTX(){
    this.showAdditionalOptions = false;
  }



  public addTransaction(){
    this.isRequest = true;
    let transaction = new Transaction();
    transaction.amount = this.total;
    transaction.description = this.joinDescription();
  }


}
