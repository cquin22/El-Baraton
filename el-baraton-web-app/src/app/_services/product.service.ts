import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

import {environment} from "../../environments/environment";

import {Brand} from "../model/brand.model";
import {Product} from "../model/product.model";
import { SelectCategoriesNotificationService } from "../_store-notifications/select-categories-notification";




@Injectable()
export class ProductService{

  private products: Array<Product> = [];

  constructor(
    private http: Http,
    private selectCategoriesNotificationService: SelectCategoriesNotificationService

  ) {}


  public getAllProducts(): Observable<any> {
    return this.http.get("./assets/data/products.json")
    .map((res: any) => {
      let response = res.json()
      this.setProducts(response.products);
      return this.products;
    })
    .catch((error: any) => Observable.throw(
      error.json().error || 'Server error')
    ); 
  };


  public filterProductsByCategory(id: number, products: Array<Product>){
    var filter = products.filter(function (product) {
      return product.sublevel_id === id;
    });
    this.selectCategoriesNotificationService.setSelectCategory(filter);
  }

  public setProducts(products: Array<Product>){
      this.products = products;
  } 


  public getProducts(){
    return this.products;
  } 


}
