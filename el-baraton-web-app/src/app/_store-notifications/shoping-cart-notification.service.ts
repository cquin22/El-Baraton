import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {ItemShop} from "../model/item-shop.model";
const KEY_SHOP = 'shp';

@Injectable()
export class ShoppingCartNotificationService{
  public store = new Subject();

  private items: Array<ItemShop> = [];

  public storedItemsId = [];

  constructor() {

  }


  public addItem(itemShop: ItemShop){
    //this.items.push(itemShop);
    this.store.next(itemShop);
  }

  public removeItem() {
    this.store.next(null);
  }

  public unSubscribe() {
    this.store.unsubscribe();
  }

  public getSubscription(): Observable<any> {
    return this.store.asObservable();
  }

  public verifyIdInStore(item: ItemShop): boolean{
    let stored  = this.getStoreShop();
    let verify : boolean;
    for(let itemStored of stored){
      if(itemStored.id === item.id){
        verify = true;
      }
    }

    return verify;
  }

  public updateLogShop(items: Array<ItemShop>){
    sessionStorage.removeItem(KEY_SHOP);
    let encryptedShop = btoa(JSON.stringify(items));
    sessionStorage.setItem(KEY_SHOP, encryptedShop);
  }

  public resetShop(){
    sessionStorage.removeItem(KEY_SHOP);
  }

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
