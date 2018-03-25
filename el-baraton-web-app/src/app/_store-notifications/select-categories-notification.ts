import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {ItemShop} from "../model/item-shop.model";
import { Product } from '../model/product.model';
const KEY_SHOP = 'shp';

@Injectable()
export class SelectCategoriesNotificationService{
  
  public selectCategory = new Subject<Array<Product>>();


  constructor() {

  }


  public setSelectCategory(products: Array<Product>){
        this.selectCategory.next(products);
  }

  public getSubscription(): Observable< Array<Product>> {
    return this.selectCategory.asObservable();
  }


}
