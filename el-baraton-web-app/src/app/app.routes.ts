import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { ProductsModule } from './_modules/products/products.module';







const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },

  {
    path: 'products',
    loadChildren: () => ProductsModule
  },

  {
    path: 'error',
    loadChildren: './_modules/system-errors/system-errors.module#SystemErrorsModule'
  },
  {
    path: '**',
    redirectTo: '/error/page-not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutesModule {}
