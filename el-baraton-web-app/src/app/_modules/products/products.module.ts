import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexRouteComponent } from './index-route/index-route.component';
import { ListOfProductsComponent } from './list-of-products/list-of-products.component';
import { ProductRoutesModule } from './products-route';
import { CoreModule } from '../../_core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LeftNavCategoriesComponent } from './left-nav-categories/left-nav-categories.component';
import { CategoriesService } from '../../_services/categories.service';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NgPipesModule } from 'ngx-pipes';



@NgModule({
  imports: [
    CommonModule,
    ProductRoutesModule,
    CoreModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgPipesModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    CategoriesService
  ],
  declarations: [
    IndexRouteComponent, 
    ListOfProductsComponent, LeftNavCategoriesComponent, ProductComponent, ProductDetailComponent
  ]
})
export class ProductsModule { }
