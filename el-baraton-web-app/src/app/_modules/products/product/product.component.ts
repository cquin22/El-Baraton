import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../model/product.model';
import { ItemShop } from '../../../model/item-shop.model';
import { ShoppingCartNotificationService } from '../../../_store-notifications/shoping-cart-notification.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  constructor(
    private shoppingCartNotificationService: ShoppingCartNotificationService
  ) { }

  ngOnInit() {
  }


  public addToCart(){
    let itemShop = new ItemShop();
    itemShop.id = this.product.id;
    itemShop.title = this.product.name;
    itemShop.totalPrice = this.product.price;
    itemShop.quantity = 1;

    this.shoppingCartNotificationService.addItem(itemShop);

  }

}
