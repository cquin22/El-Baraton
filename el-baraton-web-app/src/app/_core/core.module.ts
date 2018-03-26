import { AmountFormatPipe } from './../_utils/amount-format.pipe';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopingCartHeaderComponent } from './shoping-cart-header/shoping-cart-header.component';
import { FooterComponent } from './footer/footer.component';

import { SearchComponent } from './search/search.component';

import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import {
  MzButtonModule, MzCheckboxModule, MzCollapsibleModule, MzCollectionModule, MzDatepickerModule, MzDropdownModule,
  MzIconMdiModule,
  MzIconModule,
  MzInputModule, MzMediaModule,
  MzModalModule, MzProgressModule,
  MzRadioButtonModule, MzSelectModule,
  MzSidenavModule, MzSwitchModule, MzTabModule, MzTextareaModule, MzToastModule, MzTooltipModule
} from 'ng2-materialize';

import 'hammerjs';
import {ErrorFormComponent} from './error-form/error-form.component';
import {RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BigdecimalInputDirective } from '../_utils/bigdecimal-input.directive';
import { QuantityControlComponent } from './quantity-control/quantity-control.component';
import { AdvancdSearchComponent } from './advancd-search/advancd-search.component';





@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MzButtonModule,
    MzInputModule,
    MzSidenavModule,
    MzModalModule,
    MzRadioButtonModule,
    MzCheckboxModule,
    MzSelectModule,
    MzSwitchModule,
    MzTextareaModule,
    MzDropdownModule,
    MzCollapsibleModule,
    MzCollectionModule,
    MzTabModule,
    MzIconModule,
    MzIconMdiModule,
    MzToastModule,
    MzTooltipModule,
    MzMediaModule,
    FormsModule,


  ],
  declarations: [
    ShopingCartHeaderComponent,
    FooterComponent,
    SearchComponent,
    ShoppingCartComponent,
    ErrorFormComponent,
    BigdecimalInputDirective,
    AmountFormatPipe,
    QuantityControlComponent,
    AdvancdSearchComponent

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    ShopingCartHeaderComponent,
    ErrorFormComponent,
    FooterComponent,
    SearchComponent,
    MzButtonModule,
    MzInputModule,
    MzSidenavModule,
    MzModalModule,
    MzRadioButtonModule,
    MzCheckboxModule,
    MzSelectModule,
    MzSwitchModule,
    MzTextareaModule,
    MzDropdownModule,
    MzCollapsibleModule,
    MzCollectionModule,
    MzTabModule,
    MzIconModule,
    MzIconMdiModule,
    MzToastModule,
    MzTooltipModule,
    MzMediaModule,
    MzProgressModule,
    MzTextareaModule,
    MzDatepickerModule,
    BigdecimalInputDirective,
    AmountFormatPipe,
    QuantityControlComponent,
    AdvancdSearchComponent
  ]
})
export class CoreModule { }
