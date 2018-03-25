import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {environment} from "../../environments/environment";

import {Transaction} from "../model/transaction-model";
import {Order} from "../model/order-model";

@Injectable()
export class ProcessTransactionService{

  private environment =  environment;




  constructor(
    private http: Http
  ) {}




}
