import {Component, HostListener, OnInit} from '@angular/core';


@Component({
  selector: 'app-shoping-cart-header',
  templateUrl: './shoping-cart-header.component.html',
  styleUrls: ['./shoping-cart-header.component.scss']
})
export class ShopingCartHeaderComponent implements OnInit {

  public pageYOffset: number;

  @HostListener('window:scroll', ['$event'])
  doSomething(event) {
    this.pageYOffset = window.pageYOffset;
  }
  constructor(

  ) { }

  ngOnInit() {

  }

}
