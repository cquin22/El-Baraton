import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductService } from './_services/product.service';
import { ProcessTransactionService } from './_services/process-transaction.service';
import { AppRoutesModule } from './app.routes';
import { ShoppingCartNotificationService } from './_store-notifications/shoping-cart-notification.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { SelectCategoriesNotificationService } from './_store-notifications/select-categories-notification';
import {NgPipesModule} from 'ngx-pipes';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    HttpClientModule,
    HttpModule,
    NgPipesModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    ProductService,
    ProcessTransactionService,
    ShoppingCartNotificationService,
    SelectCategoriesNotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
