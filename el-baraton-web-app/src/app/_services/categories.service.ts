import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Product} from "../model/product.model";




@Injectable()
export class CategoriesService{

    constructor(
        private http: Http

    ) {}

    public getCategories(): Observable<any> {
        return this.http.get("./assets/data/categories.json")
        .map((res: any) => {
          return res.json();
        })
        .catch((error: any) => Observable.throw(
          error.json().error || 'Server error')
        );
    }

}
