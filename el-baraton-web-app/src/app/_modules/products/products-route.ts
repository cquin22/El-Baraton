import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { IndexRouteComponent } from './index-route/index-route.component';
import { ListOfProductsComponent } from './list-of-products/list-of-products.component';





const ProductRoutes: Routes = [
  {
    path: '',
    component: IndexRouteComponent,  children: [
    { path: '', pathMatch: 'full', redirectTo: 'list' },
    {
      path: 'list',
      component: ListOfProductsComponent
    }
  ]},
];


@NgModule({
  imports: [RouterModule.forChild(ProductRoutes)],
  exports: [RouterModule]
})
export class ProductRoutesModule {}
