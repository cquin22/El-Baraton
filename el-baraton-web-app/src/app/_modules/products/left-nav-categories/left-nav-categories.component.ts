import { Component, OnInit } from '@angular/core';
import { Category } from '../../../model/category.model';
import { CategoriesService } from '../../../_services/categories.service';
import { ElementRef } from '@angular/core/src/linker/element_ref';
import { ViewChild } from '@angular/core/src/metadata/di';
import * as $ from 'jquery';
import { ProductService } from '../../../_services/product.service';
import { Search } from '../../../model/search.model';

@Component({
  selector: 'app-left-nav-categories',
  templateUrl: './left-nav-categories.component.html',
  styleUrls: ['./left-nav-categories.component.scss']
})
export class LeftNavCategoriesComponent implements OnInit {

  public categories: Array<Category> = [];

  public selectedCategory: Category;

  public history: any = {};

  public selectedId: number;

  public oldId: number;

  public count: number = 0;

  public resetInit: boolean;

  public sigleSelection: boolean;


  constructor(
    private categoriesService: CategoriesService,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.categoriesService.getCategories()
    .subscribe(
      response => {
          console.log(response);
          this.categories = response.categories;
      }, e => {

      })
  }

  public back(){
    if(this.count > 0){
      this.count = this.count -1;
    }else{
      this.resetInit = true;
    }

    this.selectedCategory = this.history[this.count];
    
  }

  public resetCategories(){
    this.productService.filterProductsByUserSearch();
  }

  public selectCategory(category: any, id: number){
    if(category.length === 1 && category[0].sublevels){
      this.selectedCategory = null;
      this.selectedCategory = category[0];
      this.count = this.count +1;
      this.history[this.count] = this.selectedCategory;
    }

    if(category  && category.sublevels){
      this.selectedCategory = null;
      this.selectedCategory = category;
      this.count = this.count +1;
      this.history[this.count] = this.selectedCategory;
    }

    if(category && category.length > 1){
      this.selectedCategory = null;
      let tempCategory = new Category();
      tempCategory.sublevels = category;
      this.selectedCategory = tempCategory;
      this.count = this.count +1;
      this.history[this.count] = this.selectedCategory;
    }

    let search = new Search();
    search.sublevelId = id;
    this.productService.filterProductsByUserSearch(search);

  }

}
