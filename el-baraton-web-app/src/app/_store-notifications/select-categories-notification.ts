import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {ItemShop} from "../model/item-shop.model";
import { Product } from '../model/product.model';


/**
 * SelectCategoriesNotificationService
 *
 * @description :: Storage for push notification between components
 * @author:: Cristian Quintero <cristianqr22@gmail.com>
*/

@Injectable()
export class SelectCategoriesNotificationService{

  public selectCategory = new Subject<Array<Product>>();


  constructor() {

  }


  /**
   *
   * @description set selected category
   * @returns void.
  */

  public setSelectCategory(products: Array<Product>): void{
        this.selectCategory.next(products);
  }

  /**
   *
   * @description get Observable subscription
   * @returns Observable< Array<Product>>.
  */

  public getSubscription(): Observable< Array<Product>> {
    return this.selectCategory.asObservable();
  }


}
