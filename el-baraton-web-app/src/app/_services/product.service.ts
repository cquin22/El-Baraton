import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

import {environment} from "../../environments/environment";

import {Product} from "../model/product.model";
import { SelectCategoriesNotificationService } from "../_store-notifications/select-categories-notification";
import { Search } from "../model/search.model";




@Injectable()
export class ProductService{

  private products: Array<Product> = [];

  private selectId: number;

  private selectedWordForFilter: string;

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

  public filterProductsByUserSearch(search?: Search){
    let _self = this;
    if(search && search.sublevelId){
      this.selectId = search.sublevelId;
    }    
    let products : Array<Product> = this.getProducts();
    if(search && (search.available != null || search.available != undefined) ){
      products = products.filter(function (product) {
        return product.available === search.available;
      });
    }

    if(search && search.priceRange && (search.priceRange.to && search.priceRange.to >= 0) && (search.priceRange.from && search.priceRange.from >0) ){
      products = products.filter(function (product) {
        return product.price >= search.priceRange.from && product.price <= search.priceRange.to;
      });
    }

    if(search && search.quantityRange && (search.quantityRange.to && search.quantityRange.to >= 0) && (search.quantityRange.from && search.quantityRange.from >0) ){
      products = products.filter(function (product) {
        return product.quantity >= search.quantityRange.from && product.quantity <= search.quantityRange.to;
      });
    }

    if(search && search.word){
      products = products.filter(function (product) {
        return product.name.indexOf(search.word)>-1 ;
      });
    }

    if(this.selectId){
      products = products.filter(function (product) {
        return product.sublevel_id === _self.selectId;
      });
    }

    this.selectCategoriesNotificationService.setSelectCategory(products);
  }

  public setProducts(products: Array<Product>){
      this.products = products;
  } 


  public getProducts(){
    return this.products;
  } 


}
