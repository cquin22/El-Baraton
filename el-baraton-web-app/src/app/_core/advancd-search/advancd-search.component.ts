import { Component, OnInit, Input } from '@angular/core';
import { Search } from '../../model/search.model';
import { PriceRange } from '../../model/price-range.model';
import { QuantityRange } from '../../model/quantity-range.model';
import { ProductService } from '../../_services/product.service';


@Component({
  selector: 'app-advancd-search',
  templateUrl: './advancd-search.component.html',
  styleUrls: ['./advancd-search.component.scss']
})
export class AdvancdSearchComponent implements OnInit {

  @Input() public idCheck: string;

  public searchModel: Search = new Search();


  constructor(
    private productService: ProductService
  ) {

  }

  ngOnInit() {
    this.resetFilters(false);
  }


  public onChangeAvailable(event: any){
      console.log(this.searchModel);
      this.productService.filterProductsByUserSearch(this.searchModel);
  }

  public setRange(){
    this.productService.filterProductsByUserSearch(this.searchModel);
  }

  public resetFilters(isActionTemplate: boolean){
    let priceRange = new PriceRange();
    let quantityRange = new QuantityRange();
    this.searchModel.priceRange = priceRange;
    this.searchModel.available = null;
    this.searchModel.quantityRange = quantityRange;
    if(isActionTemplate){
      this.productService.filterProductsByUserSearch(this.searchModel);
    }
  }

}
