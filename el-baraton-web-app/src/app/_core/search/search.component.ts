import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { ProductService } from '../../_services/product.service';
import { Search } from '../../model/search.model';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public search : string;

  constructor(
    private router: Router,
    private productService: ProductService

  ) { }

  @HostListener('document:keydown', ['$event'])
  private handleKeyboardEvent(event: KeyboardEvent) {
    const keyCode = event.keyCode;
    if (keyCode === 13) {
      this.searchByWord();
    }
  }

  ngOnInit() {
  }

  public searchByWord(){
    if(this.search.length > 2){
      let search = new Search();
      search.word = this.search;
      this.productService.filterProductsByUserSearch(search);
    }
  }

}
