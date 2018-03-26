import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {ItemShop} from "../model/item-shop.model";
const KEY_SHOP = 'shp';

/**
 * ShoppingCartNotificationService
 *
 * @description :: Storage Shopping cart for push notification between components
 * @author:: Cristian Quintero <cristianqr22@gmail.com>
*/

@Injectable()
export class ShoppingCartNotificationService{
  public store = new Subject();

  private items: Array<ItemShop> = [];



  constructor() {

  }

  /**
   *
   * @description add Item Shop
   * @param: ItemShop
   * @returns void
  */
  public addItem(itemShop: ItemShop){
    //this.items.push(itemShop);
    this.store.next(itemShop);
  }


  /**
   *
   * @description get Observable subscription
   * @returns Observable<any>.
  */
  public getSubscription(): Observable<any> {
    return this.store.asObservable();
  }

  /**
   *
   * @description update shopping cart
   * @param: Array<ItemShop>
   * @returns void
  */
  public updateLogShop(items: Array<ItemShop>){
    sessionStorage.removeItem(KEY_SHOP);
    let encryptedShop = btoa(JSON.stringify(items));
    sessionStorage.setItem(KEY_SHOP, encryptedShop);
  }

  /**
   *
   * @description reset shopping cart
   * @returns void
  */
  public resetShop(){
    sessionStorage.removeItem(KEY_SHOP);
  }

  /**
   *
   * @description get shopping cart
   * @returns: Array<ItemShop>
  */
  public getStoreShop() : Array<ItemShop>{
    const session = sessionStorage.getItem(KEY_SHOP);
    if(session){
      let decodedStore = atob(session);
      var jsonShop = JSON.parse(decodedStore);
      this.items = jsonShop;
      return this.items;
    }else{
      return new Array<ItemShop>();
    }
  }

}
