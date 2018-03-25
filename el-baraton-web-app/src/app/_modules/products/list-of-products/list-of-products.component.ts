import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../_services/product.service';
import { Product } from '../../../model/product.model';
import { SelectCategoriesNotificationService } from '../../../_store-notifications/select-categories-notification';


@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.scss']
})
export class ListOfProductsComponent implements OnInit {

  public products: Array<Product> = [];

  public isLoadRequest: boolean;

  public order: string;

  public isUp: boolean;

  constructor(
    private productService : ProductService,
    private selectCategoriesNotificationService: SelectCategoriesNotificationService
  ) { }

  ngOnInit() {
    this.productService.getAllProducts()
    .subscribe(
      response => {
          this.products = response;
          this.isLoadRequest = true;
      }, e => {

      });
    this.selectCategoriesNotificationService.getSubscription().subscribe(products =>{
      this.isLoadRequest = false;
      setTimeout(()=>{  
        this.products = products;
        this.isLoadRequest = true;
      },500);

    })

  }

  public onChangeSelect(event: any){
      if(this.isUp){
        this.order = "-"+event;
      }else{
        this.order = event;
      }
  }


  public changeDirectionOrder(){
    this.isUp = !this.isUp;
    if(this.isUp){
        this.order = "-"+this.order;
    }else{
      this.order = this.order.replace('-', '');
    }
  }

}
